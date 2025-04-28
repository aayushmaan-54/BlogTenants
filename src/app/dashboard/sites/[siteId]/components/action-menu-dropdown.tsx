"use client";
import Icons from "@/icons/icons";
import cn from "@/utils/cn";
import { ReactNode, useState } from "react";


export default function ActionMenuDropDown({
  className,
  children
}: {
  className?: string,
  children: ReactNode,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const menuClickHandler = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <div className={cn(className, "relative")}>
        <Icons.MoreVertical onClick={menuClickHandler} className="cursor-pointer hover:bg-secondary py-1 rounded-sm size-7 transition-all" />
        <div className={cn(
          "absolute flex flex-col bg-secondary px-6 py-2 rounded-md top-8 right-[90%] z-10",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          {children}
        </div>
      </div>
    </>
  );
}