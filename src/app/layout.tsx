import type { Metadata } from "next";
import { Geist_Mono, Monomaniac_One } from "next/font/google";
import cn from "@/utils/cn";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monomaniacOne = Monomaniac_One({
  variable: "--font-monomaniac-one",
  weight: ["400"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://blogtenants.vercel.app"),
  title: {
    default: "BlogTenants - Create and Grow Your Own Blog",
    template: "BlogTenants | %s",
  },
  description:
    "BlogTenants is a powerful multi-tenant blogging platform that enables anyone to create, manage, and grow their own blog — all under one unified system.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "BlogTenants - Create and Grow Your Own Blog",
    description:
      "Launch your own blog with BlogTenants — a multi-tenant platform designed for bloggers, writers, and creators. Build your audience, and grow with ease.",
    images: ["/blogtenants-og.png"],
  },
  keywords: [
    "BlogTenants",
    "Multi-Tenant Blog",
    "Create a Blog",
    "Start Blogging",
    "Blog Platform",
    "Customizable Blog",
    "Blog Hosting",
    "Multi Blog System",
    "SaaS Blog Platform",
    "Personal Blog",
    "Content Management",
    "Open Source Blogging",
    "Writer Platform",
    "Modern Blog CMS",
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          geistMono.variable, monomaniacOne.variable,
          geistMono.className,
          'antialiased bg-background text-text-primary font-geistMono flex flex-col min-h-screen'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}