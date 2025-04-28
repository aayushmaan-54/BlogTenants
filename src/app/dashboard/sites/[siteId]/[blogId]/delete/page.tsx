import { deletePostAction } from "@/actions/delete-blog";
import SubmitButton from "@/app/dashboard/components/submit-button";
import Link from "next/link";



export default async function BlogDeletePage({ params }: Readonly<{
  params: Promise<{ blogId: string, siteId: string }>;
}>) {
  const { blogId, siteId } = await params;

  return (
    <>
      <div className="w-full h-full flex flex-1 items-center justify-center">
        <div className="border border-border rounded-md w-[90vw] sm:w-[500px] px-3 py-3">
          <h1 className="text-2xl font-bold mb-1">Are you sure?</h1>
          <p className="text-text-muted">This action cannot be undone. This will remove all of related data from server!</p>

          <div className="flex items-center gap-2">
            <button className="bg-secondary px-2 py-2 rounded-md border border-secondary hover:bg-secondary/80 cursor-pointer">
              <Link href={`/dashboard/sites/${siteId}`}>Cancel</Link>
            </button>
            <form action={deletePostAction}>
              <input type="hidden" name="blogId" value={blogId} />
              <input type="hidden" name="siteId" value={siteId} />
              <SubmitButton text="Delete" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}