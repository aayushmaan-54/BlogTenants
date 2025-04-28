/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { db } from "@/lib/db";
import { TenantCreationSchema } from "@/validations/create-tenant.schema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createTenantAction(_prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user) {
    return redirect('/api/auth/login');
  }

  const submission = await parseWithZod(formData, {
    schema: TenantCreationSchema({
      async isSubdomainUnique() {
        const exsistingSubdomain = await db.tenant.findUnique({
          where: {
            subdomain: formData.get('subdomain') as string,
          }
        });

        return !exsistingSubdomain;
      }
    }),
    async: true,
  });

  if(submission.status !== 'success') {
    return submission.reply()
  }

  await db.tenant.create({
    data: {
      name: submission.value.name,
      subdomain: submission.value.subdomain,
      description: submission.value.description,
      userId: user.id,
    }
  });

  return redirect("/dashboard/sites");
}