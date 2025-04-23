import Icons from "@/icons/icons";
import Link from "next/link";


export default function DashboardPage() {

  return (
    <>
      <div className="mx-3 mt-4">
        <Link href={'/site/new'} className="flex items-center gap-1 mr-5 bg-primary text-white dark:text-black hover:bg-primary/80 w-fit px-3 py-2 rounded-md">
          <Icons.CirclePlus className="size-5" />
          Create Site
        </Link>

        <div className="border border-dashed border-secondary flex items-center flex-col justify-center py-5 px-4 mt-10">
          <div className="bg-secondary/50 w-fit p-4 rounded-full mb-5 mt-3">
            <Icons.File className="text-primary size-10" />
          </div>

          <h1 className="font-bold text-xl mb-2">You haven't created any sites yet</h1>
          <p className="text-center text-text-muted w-[80%]">Start by creating your first site to share your content with the world. It's quick, easy, and you'll be up and running in no time.</p>
        </div>
      </div>
    </>
  );
}