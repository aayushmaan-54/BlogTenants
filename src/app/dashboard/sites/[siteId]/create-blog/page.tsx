import "@uploadthing/react/styles.css";
import CreateBlogClient from "./components/create-blog-client";


export default async function CreateBlogPage({
  params,
}: Readonly<{
  params: Promise<{ siteId: string }>;
}>) {

  const { siteId } = await params;

  if (!siteId) {
    return <h1>Missing site ID</h1>;
  }

  return <CreateBlogClient siteId={siteId} />;
}