"use client";
import cn from "@/utils/cn";
import Link from "next/link";

export default function ShinyButton() {
  return (
    <Link
      className={cn(
        "flex items-center justify-center font-monomaniac-one text-white font-bold text-2xl rounded-md size-[40px] sm:size-[45px] select-none",
        "bg-gradient-to-b from-[#007FFF] to-[#2A52BE] shadow-[inset_3px_-5px_3px_-1px_rgba(0,_0,_0,_0.7)]",
        "relative overflow-hidden group shine-button ml-1"
      )}
      href={'/'}
    >
      <span className="relative z-10 mb-1 [text-shadow:_3px_1px_2px_rgba(0,0,0,0.33)]">BT</span>
    </Link>
  );
}