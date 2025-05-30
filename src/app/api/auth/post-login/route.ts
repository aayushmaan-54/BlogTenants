import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong!");
  }

  let dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImageUrl: user.picture ?? `${process.env.VERCEL_AVATAR_SERVICE}/${user.given_name}`
      }
    })
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/sites`)
}