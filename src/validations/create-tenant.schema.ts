import { z } from 'zod';


export const createTenantSchema = z.object({
  name: z.string().min(1).max(35),
  description: z.string().min(1).max(150),
  subdomain: z.string().min(1).max(40)
});


export function TenantCreationSchema(options?: {
  isSubdomainUnique: (subdomain: string) => Promise<boolean>;
}) {
  return z.object({
    subdomain: z
      .string()
      .min(1)
      .max(40)
      .regex(/^[a-z]+$/, "Subdomain should have only lowercase letters")
      .transform((value) => value.toLowerCase())
      .superRefine(async (subdomain, ctx) => {
        if (typeof options?.isSubdomainUnique !== "function") {
          ctx.addIssue({
            code: "custom",
            message: "Validation function not defined",
            fatal: true,
          });
          return;
        }

        const isUnique = await options.isSubdomainUnique(subdomain);
        if (!isUnique) {
          ctx.addIssue({
            code: "custom",
            message: "Subdomain is already taken...",
          });
        }
      }),
    name: z.string().min(1).max(35),
    description: z.string().min(1).max(150),
  });
}