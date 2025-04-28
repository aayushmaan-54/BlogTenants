"use client";
import Logo from "@/components/logo";
import ThemeToggle from "./theme-toggle";
import Icons from "@/icons/icons";
import { useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";


export default function Header() {
  const[isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownMenuVisible((prev) => !prev);
  };
  

  return (
    <>
      <header className="flex items-center justify-between px-5 py-2 border-b border-b-border">
        <div>
          <Logo />
        </div>

        <div className="flex items-center justify-centers mr-2">
          <div className="mr-3">
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-center bg-secondary p-2 rounded-full relative">
            <Icons.DefaultAvatar className="size-5 cursor-pointer" onClick={toggleDropdown} />
            
            { isDropdownMenuVisible && (
              <div className="absolute top-11 bg-tertiary p-2 px-4 mr-3 border border-primary rounded-md">
                <LogoutLink>
                  Logout
                </LogoutLink>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}