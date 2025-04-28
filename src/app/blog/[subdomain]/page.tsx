import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import ShinyButton from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import DeafultPatternImage from "@/../public/bg-pattern.png";


async function getData(subdomain: string) {
  const data = await db.tenant.findUnique({
    where: {
      subdomain: subdomain,
    },
    select: {
      name: true,
      blogs: {
        select: {
          description: true,
          title: true,
          imageUrl: true,
          createdAt: true,
          id: true,
          slug: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!data) notFound();

  return data;
}


export default async function BlogListPage({ params }: Readonly<{
  params: Promise<{ subdomain: string }>
}>) {
  const { subdomain } = await params;

  const data = await getData(subdomain);

  return (
    <>
      <nav className="grid grid-cols-3 my-10 relative">
        <div className="col-span-1" />

        <div className="flex items-center gap-x-4 justify-center">
          <div className="flex-shrink-0">
            <ShinyButton />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">{data.name}</h1>
        </div>

        <div className="col-span-1 flex w-full justify-end absolute bottom-10 sm:static tracking-tight">
          <ThemeToggle />
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-10">
        {data.blogs.map((item) => (
          <div key={item.id} className="border border-border rounded-[9px] shadow-sm flex flex-col h-full">
            <Image
              src={item.imageUrl ?? DeafultPatternImage}
              alt={`${item.title} background image`}
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
                  <Link href={`/blog/${subdomain}/${item.slug}`} className="w-full text-center">
                    Read Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}