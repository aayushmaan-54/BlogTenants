/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import { db } from "@/lib/db";
import { CreateBlogSchema } from "@/validations/create-blog.schema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export async function editBlogAction(_prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user) {
    return redirect('/api/auth/login');
  }

  const submission = parseWithZod(formData, {
    schema: CreateBlogSchema,
  });

  if(submission.status !== 'success') {
    return submission.reply()
  }
  
  await db.blog.update({
    where: {
      userId: user.id,
      id: formData.get('blogId') as string,
    },
    data: {
      title: submission.value.title,
      description: submission.value.description,
      slug: submission.value.slug,
      content: JSON.parse(submission.value.content),
      imageUrl: submission.value.imageUrl
    }
  })

  return redirect(`/dashboard/sites/${formData.get('siteId')}`);
}