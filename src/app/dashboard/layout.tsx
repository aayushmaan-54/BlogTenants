import Sidebar from "./components/sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}