"use client";
import Link from "next/link";

export default function ShinyButton() {
  return (
    <Link href="/" className="logo group shine-button flex-shrink-0!">
      <span className="relative z-10 mb-1 [text-shadow:_3px_1px_2px_rgba(0,0,0,0.33)]">
        BT
      </span>
    </Link>
  );
}