import Link from "next/link";
import React from "react";
import NavbarNav from "./navbarnav";

export default function Navbar() {
  return (
    <div className="px-20 h-15 bg-gray-700 font-semibold flex justify-between items-center">
      <div className="space-x-8">
        <NavbarNav />
      </div>
      <div>
        <Link href="/" className="hover:underline">
          Log out
        </Link>
      </div>
    </div>
  );
}
