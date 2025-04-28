import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import EditBlogForm from "./components/edit-blog-form";


async function getData(blogId: string) {
  const data = await db.blog.findUnique({
    where: {
      id: blogId,
    },
    select: {
      imageUrl: true,
      title: true,
      description: true,
      slug: true,
      content: true,
      id: true,
    }
  });

  if (!data) return notFound();

  return data;
}


export default async function EditBlogPage({ params }: Readonly<{
  params: Promise<{ blogId: string, siteId: string }>;
}>) {
  const { blogId, siteId } = await params;
  const blogData = await getData(blogId);


  return (
    <>
      <EditBlogForm blogData={blogData} siteId={siteId} />
    </>
  );
}