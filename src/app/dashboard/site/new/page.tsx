"use client";
import { createTenantAction } from "@/actions/create-tenant";
import { createTenantSchema } from "@/validations/create-tenant.schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import SubmitButton from "../../components/submit-button";


export default function NewSitePage() {
  const [lastResult, action] = useActionState(createTenantAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: createTenantSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
   });

  return (
    <>
      <div className="flex items-center justify-center mt-14 w-[90vw] sm:w-[450px] mx-auto">
        <div className="flex flex-col items-center justify-center border border-border w-fit px-5 py-5 rounded-md">
          <div>

            <div className="mb-7">
              <h1 className="text-xl sm:text-2xl font-bold">Launch Your Blog in Seconds</h1>
              <p className="text-text-muted text-sm sm:text-base">Just a title, subdomain, and description to get started.</p>
            </div>

            <form 
              className="text-sm sm:text-base" 
              id={form.id} 
              onSubmit={form.onSubmit}
              action={action}
            >
              <div>
                <div className="flex flex-col gap-1 mb-7">
                  <label htmlFor="siteName">Site Name</label>
                  <input
                    type="text"
                    name={fields.name.name}
                    key={fields.name.key}
                    defaultValue={fields.name.initialValue}
                    id="siteName"
                    className="input"
                    placeholder="Site Name"
                  />
                  <p className="error-text">{fields.name.errors}</p>
                </div>

                <div className="flex flex-col mb-7">
                  <label htmlFor="subdomain">Subdomain</label>
                  <input
                    type="text"
                    name={fields.subdomain.name}
                    key={fields.subdomain.key}
                    defaultValue={fields.subdomain.initialValue}
                    id="subdomain"
                    className="input"
                    placeholder="Subdomain"
                  />
                  <p className="error-text">{fields.subdomain.errors}</p>
                </div>

                <div className="flex flex-col mb-7">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name={fields.description.name}
                    key={fields.description.key}
                    defaultValue={fields.description.initialValue}
                    id="description"
                    rows={4}
                    className="input"
                    placeholder="Small Description for your site"
                  />
                  <p className="error-text">{fields.description.errors}</p>
                </div>
                <SubmitButton text="Create Site" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}