/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { db } from "@/lib/db";
import { CreateBlogSchema } from "@/validations/create-blog.schema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export async function createBlogAction(_prevState: any, formData: FormData) {
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
  
  await db.blog.create({
    data: {
      title: submission.value.title,
      description: submission.value.description,
      imageUrl: submission.value.imageUrl,
      content: JSON.parse(submission.value.content),
      slug: submission.value.slug,
      user: {
        connect: { id: user.id }
      },
      tenant: {
        connect: { id: formData.get('siteId') as string }
      }
    }
  });

  return redirect(`/dashboard/sites/${formData.get('siteId')}`);
}