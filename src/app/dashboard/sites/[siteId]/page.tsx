import Button from "@/components/ui/button";
import Icons from "@/icons/icons";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ActionMenuDropDown from "./components/action-menu-dropdown";

async function getBlogsData(userId: string, tenantId: string) {
  const data = await db.blog.findMany({
    where: {
      userId: userId,
      tenantId: tenantId,
    },
    select: {
      imageUrl: true,
      title: true,
      createdAt: true,
      id: true,
      tenant: {
        select: {
          subdomain: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc"
    },
  });

  return data;
}

export default async function DashboardSitePage({
  params,
}: Readonly<{
  params: Promise<{ siteId: string }>;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect('/api/auth/login');

  const { siteId } = await params;

  if (!siteId) {
    return <h1>Missing site ID</h1>;
  }

  const data = await getBlogsData(user.id, siteId);

  return (
    <>
      <div className="mx-3 mt-4 pb-7">
        <div className="flex flex-wrap items-center gap-3">
          <Button className="text-[10px] sm:text-base">
            <Link href={`/dashboard/sites/${siteId}/create-blog`} className="flex items-center gap-1">
              <Icons.CirclePlus className="sm:size-5 sm:block! hidden" />
              Create Blog
            </Link>
          </Button>

          <Button className="text-[10px] sm:text-base">
            <Link href={`/dashboard/sites/${siteId}/settings`} className="flex items-center gap-1">
              <Icons.Cog className="sm:size-5 sm:block! hidden" />
              Settings
            </Link>
          </Button>

          <Button className="text-[10px] sm:text-base">
            <Link href={`/blog/${data[0]?.tenant?.subdomain}`} className="flex items-center gap-1">
              <Icons.Book className="sm:size-5 sm:block! hidden" />
              View Blogs
            </Link>
          </Button>
        </div>
      </div>

      {data === undefined || data.length === 0 ? (
        <div className="border border-dashed border-secondary flex items-center flex-col justify-center py-5 px-4 mt-10 w-[90vw] sm:w-[500px] lg:w-[60vw] mx-auto rounded-lg">
          <div className="bg-secondary/50 w-fit p-4 rounded-full mb-5 mt-3">
            <Icons.File className="text-primary size-10" />
          </div>

          <h1 className="font-bold text-lg sm:text-xl mb-2 text-center">You don&apos;t have any blogs created</h1>
          <p className="text-center text-text-muted w-[97%] sm:w-[400px] text-[13px]">Start by creating your first blog to share your content with the world. It&apos;s quick, easy, and you&apos;ll be up and running in no time.</p>
        </div>
      ) : (
        <div className="mt-4 border border-border rounded-md px-4 py-5 w-[95%] mx-auto">
          <div className="mb-14">
            <h1 className="text-2xl sm:text-3xl font-bold">Blogs</h1>
            <p className="text-text-muted">Manage your blogs in a simple and intuitive interface</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((blog) => (
              <div
                key={blog.id}
                className="border border-border rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-tertiary/10"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={blog.imageUrl}
                    alt={`${blog.title} Cover Image`}
                    fill
                    className="object-cover overflow-hidden rounded-md"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="font-medium text-lg text-text-primary line-clamp-2">{blog.title}</h2>
                    <div className="flex-shrink-0">
                      <ActionMenuDropDown>
                        <Link
                          href={`/dashboard/sites/${siteId}/${blog.id}/edit`}
                          className="block w-full rounded-md px-4 py-2 text-left hover:bg-tertiary transition-colors"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/dashboard/sites/${siteId}/${blog.id}/delete`}
                          className="block w-full rounded-md px-4 py-2 text-left hover:bg-tertiary transition-colors"
                        >
                          Delete
                        </Link>
                      </ActionMenuDropDown>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm mt-2">
                    {new Intl.DateTimeFormat('en-IN', {
                      dateStyle: "medium",
                    }).format(blog.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}