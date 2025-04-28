import Button from "@/components/ui/button";
import Icons from "@/icons/icons";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeafultPatternImage from "@/../public/bg-pattern.png";


async function getData(userId: string) {
  const [tenants, blogs] = await Promise.all([
    db.tenant.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),

    db.blog.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
  ]);

  return { tenants, blogs };
}


export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect('/api/auth/login');
  }

  const { tenants, blogs } = await getData(user.id);

  return (
    <>
      <div className="mx-3 mt-4 pb-7">
        <h1 className="text-2xl font-bold mt-7">Your Sites</h1>
        {tenants.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-10">
            {tenants.map((item) => (
              <div key={item.id} className="border border-border rounded-[9px] shadow-sm flex flex-col h-full">
                <Image
                  src={item.imageUrl ?? DeafultPatternImage}
                  alt={`${item.subdomain} background image`}
                  className="rounded-t-lg object-cover w-full h-[100px]"
                  width={400}
                  height={100}
                />
                <div className="px-3 flex flex-col flex-1">
                  <h1 className="text-xl font-bold mt-3 truncate" title={item.name}>
                    {item.name}
                  </h1>

                  <div className="flex-1 min-h-[60px]">
                    <p
                      className="text-sm text-text-muted line-clamp-2"
                      title={item.description}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto mb-4">
                    <Button className="w-full text-center">
                      <Link href={`/dashboard/sites/${item.id}`} className="w-full text-center">
                        Open Site Dashboard
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-secondary flex items-center flex-col justify-center py-5 px-4 mt-10 w-[90vw] sm:w-[500px] lg:w-[60vw] mx-auto rounded-lg">
            <div className="bg-secondary/50 w-fit p-4 rounded-full mb-5 mt-3">
              <Icons.File className="text-primary size-10" />
            </div>

            <h1 className="font-bold text-lg sm:text-xl mb-2 text-center">You don&apos;t have any blogs created</h1>
            <p className="text-center text-text-muted w-[97%] sm:w-[400px] text-[13px]">Start by creating your first blog to share your content with the world. It&apos;s quick, easy, and you&apos;ll be up and running in no time.</p>

            <Button className="mt-5 mb-3">
              <Link href={'/dashboard/site/new'} className="flex items-center gap-1">
                <Icons.CirclePlus className="size-5" />
                Create Site
              </Link>
            </Button>
          </div>
        )}

        <h1 className="text-2xl font-bold mt-24">Recent Blogs</h1>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-10">
            {blogs.map((item) => (
              <div key={item.id} className="border border-border rounded-[9px] shadow-sm flex flex-col h-full">
                <Image
                  src={item.imageUrl ?? DeafultPatternImage}
                  alt={`${item.title} blog cover image`}
                  className="rounded-t-lg object-cover w-full h-[100px]"
                  width={400}
                  height={100}
                />
                <div className="px-3 flex flex-col flex-1">
                  <h1 className="text-xl font-bold mt-3 truncate" title={item.title}>
                    {item.title}
                  </h1>

                  <div className="flex-1 min-h-[60px]">
                    <p
                      className="text-sm text-text-muted line-clamp-2"
                      title={item.description}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto mb-4">
                    <Button className="w-full text-center">
                      <Link href={`/dashboard/sites/${item.tenantId}/${item.id}/edit`} className="w-full text-center">
                        Edit Blog
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-secondary flex items-center flex-col justify-center py-5 px-4 mt-10 w-[90vw] sm:w-[500px] lg:w-[60vw] mx-auto rounded-lg">
            <div className="bg-secondary/50 w-fit p-4 rounded-full mb-5 mt-3">
              <Icons.File className="text-primary size-10" />
            </div>

            <h1 className="font-bold text-lg sm:text-xl mb-2 text-center">You haven&apos;t created any sites yet</h1>
            <p className="text-center text-text-muted w-[97%] sm:w-[400px] text-[13px]">Start by creating your first site to share your content with the world. It&apos;s quick, easy, and you&apos;ll be up and running in no time.</p>

            <Button className="mt-5 mb-3">
              <Link href={`/dashboard/sites`} className="flex items-center gap-1">
                <Icons.CirclePlus className="sm:size-5 sm:block! hidden" />
                Create Blog
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}