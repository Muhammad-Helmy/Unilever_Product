"use client";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-200">
      <Link href="/" className="flex items-center gap-2.5">
        <img src="/image/Unilever_logo2.png" alt="U Logo" className="h-8 w-8 object-contain" />
        <img src="/image/Unilever_logo1.png" alt="Unilever Text" className="h-6 object-contain" />
        <span className="bg-blue-900 text-white font-semibold text-3xl rounded px-3 py-0.5 drop-shadow-[0_3px_0_#1e3a8a]">
          Brand
        </span>
      </Link>
    </nav>
  );
}
