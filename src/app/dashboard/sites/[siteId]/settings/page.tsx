import Icons from "@/icons/icons";
import Link from "next/link";
import UploadSiteImageForm from "./components/upload-site-image-form";
import { deleteBlogAction } from "@/actions/delete-tenant";
import SubmitButton from "@/app/dashboard/components/submit-button";


export default async function SiteSettingsPage({ params }: Readonly<{
  params: Promise<{ siteId: string }>;
}>) {
  const { siteId } = await params;

  return (
    <>
      <div className="flex items-center gap-2 w-fit py-5 px-4 mt-5 mb-4">
        <Link href={`/dashboard/sites/${siteId}`} className="border border-border p-2 ml-1 rounded-lg hover:bg-secondary/60 transition-all">
          <Icons.ArrowLeft className="size-4" />
        </Link>

        <h1 className="text-xl font-semibold">Go back</h1>
      </div>

      <UploadSiteImageForm siteId={siteId} />

      <div className="flex flex-col space-y-3 border border-red-500 px-5 py-5 rounded-md w-[90vw] md:w-[60vw] lg:w-[50vw] mx-auto mb-10 bg-red-500/10 mt-7">
        <h1 className="text-red-500 text-2xl font-bold">Delete Site</h1>
        <p className="text-text-muted text-sm sm:text-base">
          This will delete your site and all blogs associated with it. Clike button below to delete everything
        </p>
        <form action={deleteBlogAction}>
          <input type="hidden" name="siteId" value={siteId} />
          <SubmitButton text="Delete Site" />
        </form>
      </div>
    </>
  );
}