"use server";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export async function deleteBlogAction(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user) {
    return redirect('/api/auth/login');
  }

  await db.tenant.delete({
    where: {
      userId: user.id,
      id: formData.get('siteId') as string,
    },
  });

  return redirect(`/dashboard/sites`);
}