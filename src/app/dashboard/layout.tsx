import Header from "@/components/header";
import Sidebar from "./components/sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
}