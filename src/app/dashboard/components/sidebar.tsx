"use client";
import Icons from "@/icons/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname();
  
  const SidebarData = [
    {
      name: "Dashboard",
      icon: Icons.Home,
      link: '/dashboard'
    },
    {
      name: "Sites",
      icon: Icons.Globe,
      link: '/sites'
    },
    {
      name: "Pricing",
      icon: Icons.IndianRupees,
      link: '/pricing'
    },
  ];

  return (
    <aside className="border-r border-border px-7 pt-2 flex-shrink-0">
      <nav className="flex flex-col">
        {SidebarData.map((data) => {
          const isActive = pathname === data.link;
          
          return (
            <Link 
              href={data.link} 
              key={data.link} 
              className={`flex font-semibold items-center my-2 px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "hover:bg-secondary/50"
              }`}
            >
              <data.icon className={`mr-2 ${isActive ? "text-primary" : ""}`} />
              {data.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}