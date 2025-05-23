import { ReactNode } from "react";


export default function BlogLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="w-full">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          {children}
        </main>
      </div>
    </>
  );
}