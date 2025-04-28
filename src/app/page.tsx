import Hero from "@/components/hero";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(user) redirect('/dashboard');

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mb-24 overflow-y-auto">
        <Hero />
      </div>
    </>
  );
}