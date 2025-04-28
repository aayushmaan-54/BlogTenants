import Icons from "@/icons/icons";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RenderBlog from "../../components/render-blog";
import { JSONContent } from "novel";

async function getData(slug: string) {
  const data = await db.blog.findUnique({
    where: {
      slug: slug,
    },
    select: {
      content: true,
      title: true,
      description: true,
      imageUrl: true,
      createdAt: true,
    }
  });

  if (!data) return notFound();
  return data;
}


export default async function BlogPage({ params }: Readonly<{
  params: Promise<{ slug: string; subdomain: string; }>;
}>) {
  const { slug, subdomain } = await params;
  const data = await getData(slug);

  return (
    <>
      <div className="flex items-center gap-3 pt-10 pb-5 justify-start ml-[5%]">
        <Link href={`/blog/${subdomain}`} className="border border-border p-2 rounded-lg hover:bg-secondary/60 transition-all">
          <Icons.ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-xl font-bold">Go Back</h1>
      </div>

      <div className="flex flex-col items-center justify-center mb-10">
        <div className="m-auto w-full text-center md:w-7/12">
          <p className="m-auto my-5 w-10/12 font-light text-sm md:text-base text-text-muted">
            {new Intl.DateTimeFormat('en-IN', {
              dateStyle: "medium",
            }).format(data.createdAt)}
          </p>

          <h1 className="mb-5 text-3xl font-bold md:text-6xl tracking-tight">
            {data.title}
          </h1>

          <p className="m-auto w-10/12 text-text-muted line-clamp-3">
            {data.description}
          </p>
        </div>
      </div>

      <div className="relative m-auto mb-10 h-80 w-full max-w-screen-lg overflow-hidden md:mb-20 md:h-[450px] md:w-5/6 md:rounded-2xl lg:w-2/3">
        <Image
          src={data.imageUrl}
          alt={`${data.title} Blog Image`}
          width={1200}
          height={630}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <RenderBlog blogJson={data.content as JSONContent} />
    </>
  );
}