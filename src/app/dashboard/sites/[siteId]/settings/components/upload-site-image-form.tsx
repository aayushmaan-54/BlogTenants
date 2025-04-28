"use client";
import { editSiteImageAction } from "@/actions/update-site-image";
import SubmitButton from "@/app/dashboard/components/submit-button";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";


export default function UploadSiteImageForm({ siteId }: { siteId: string; }) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="container px-3 sm:px-10">
        <h1 className="text-2xl font-bold">Site Image</h1>
        <p className="text-text-muted">This is the image of your site. you can change it here</p>
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Blog Cover Uploaded Image"
          className="object-cover size-[200px] rounded-lg ml-[5%] mt-6"
          width={200}
          height={200}
        />
      ) : (
        <UploadDropzone
          className="w-[90%] max-w-full overflow-hidden border-border! mx-auto rounded-md"
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].ufsUrl);
            toast.success('Image uploaded successfully');
          }}
          appearance={{
            label: "text-sm text-center px-2",
            button: "text-sm mt-2"
          }}
          onUploadError={(error: Error) => {
            toast.error(`ERROR! ${error.message}`);
          }}
          endpoint={'imageUploader'}
        />
      )}
      <form action={editSiteImageAction}>
        <input type="hidden" name="siteId" value={siteId} />
        <input type="hidden" name="imageUrl" value={imageUrl} />
        <SubmitButton text="Change Image" className="ml-[5%] mt-2 mb-10" />
      </form>
    </>
  );
}