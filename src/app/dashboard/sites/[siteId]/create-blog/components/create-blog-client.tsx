"use client";
import Icons from "@/icons/icons";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import toast from "react-hot-toast";
import TailwindEditor from "@/app/dashboard/components/editor-wrapper";
import { JSONContent } from "novel";
import { createBlogAction } from "@/actions/create-blog";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { CreateBlogSchema } from "@/validations/create-blog.schema";
import slugify from "react-slugify";
import SubmitButton from "@/app/dashboard/components/submit-button";
import "@uploadthing/react/styles.css";


export default function CreateBlogClient({ siteId }: { siteId: string }) {
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  const [title, setTitle] = useState<undefined | string>(undefined);
  const [slug, setSlug] = useState<undefined | string>();
  const [description, setDescription] = useState<string>('');
  const [blogContent, setBlogContent] = useState<JSONContent | undefined>();

  const [lastResult, action] = useActionState(createBlogAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: CreateBlogSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput"
  })


  const autoSlugGenerator = () => {
    const titleInput = title;

    if (titleInput?.length === 0 || titleInput === undefined) {
      return toast.error("Please enter title first")
    }

    setSlug(slugify(titleInput));

    return toast.success("Slug has been created");
  }


  return (
    <>
      <div className="flex items-center gap-2 w-fit py-5 px-4 mt-5">
        <Link href={`/dashboard/sites/${siteId}`} className="border border-border p-2 ml-1 rounded-lg hover:bg-secondary/60 transition-all">
          <Icons.ArrowLeft className="size-4" />
        </Link>

        <h1 className="text-xl font-semibold">Create Blog</h1>
      </div>

      <div className="flex flex-col space-y-8 border border-border px-5 py-5 rounded-md w-[90vw] md:w-[60vw] lg:w-[50vw] mx-auto mb-10">
        <div>
          <h1 className="text-xl font-bold">Blog Details</h1>
          <p className="text-sm text-text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nisi commodi nesciunt esse</p>
        </div>

        <div>
          <form
            className="flex flex-col gap-6"
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
          >
            <input type="hidden" name="siteId" value={siteId} />
            <div className="grid gap-[2px]">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Blog title"
                className="input"
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <p className="error-text">{fields.title.errors}</p>
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                id="slug"
                placeholder="Blog Slug"
                className="input"
                key={fields.slug.key}
                name={fields.slug.name}
                defaultValue={fields.slug.initialValue}
                onChange={(e) => setSlug(e.target.value)}
                value={slug}
              />
              <button
                type="button"
                onClick={autoSlugGenerator}
                className="bg-secondary flex items-center justify-center w-fit px-2 py-1 rounded-md hover:bg-secondary/80 gap-1 cursor-pointer mt-1"
              >
                <Icons.Atom className="size-4" />
                Generate Slug
              </button>
              <p className="error-text">{fields.slug.errors}</p>
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Description for blog..."
                className="input min-h-[100px]"
                rows={5}
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="error-text">{fields.description.errors}</p>
            </div>

            <div className="grid gap-[2px]">
              <label>Cover Image</label>
              <input
                type="hidden"
                name={fields.imageUrl.name}
                key={fields.imageUrl.key}
                defaultValue={fields.imageUrl.initialValue}
                value={imageUrl}
              />
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Blog Cover Uploaded Image"
                  className="object-cover size-[200px] rounded-lg"
                  width={200}
                  height={200}
                />
              ) : (
                <UploadDropzone
                  className="w-full max-w-full overflow-hidden border-border! rounded-md"
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
              <p className="error-text">{fields.imageUrl.errors}</p>
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="">Blog Content</label>
              <input
                type="hidden"
                name={fields.content.name}
                key={fields.content.key}
                defaultValue={fields.content.initialValue}
                value={JSON.stringify(blogContent)}
              />
              <TailwindEditor initialValue={blogContent} onChagne={setBlogContent} />
              <p className="error-text">{fields.content.errors}</p>
            </div>

            <SubmitButton text="Create Blog" />
          </form>
        </div>
      </div>
    </>
  )
}