"use client";
import Icons from "@/icons/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  const SidebarData = [
    {
      name: "Dashboard",
      icon: Icons.Home,
      link: '/dashboard',
      matchExact: true
    },
    {
      name: "Sites",
      icon: Icons.Globe,
      link: '/dashboard/sites'
    },
  ];

  const isLinkActive = (link: string, matchExact = false) => {
    if (matchExact) {
      return pathname === link;
    }
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  // Mobile bottom navigation
  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 px-2 py-1">
        <div className="flex justify-around items-center">
          {SidebarData.map((data) => {
            const isActive = isLinkActive(data.link, data.matchExact);

            return (
              <Link
                href={data.link}
                key={data.link}
                className={`flex flex-col items-center py-2 px-3 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                <data.icon className={`h-6 w-6 mb-1 ${isActive ? "text-primary" : ""}`} />
                <span className="text-xs font-medium">{data.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  // Desktop sidebar
  return (
    <aside className="border-r border-border px-7 pt-2 flex-shrink-0 w-64 md:block z-10">
      <nav className="flex flex-col">
        {SidebarData.map((data) => {
          const isActive = isLinkActive(data.link, data.matchExact);

          return (
            <Link
              href={data.link}
              key={data.link}
              className={`flex font-semibold items-center my-2 px-3 py-2 rounded-md transition-colors ${isActive
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