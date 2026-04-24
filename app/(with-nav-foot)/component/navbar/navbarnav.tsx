"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function NavbarNav() {
  const router = usePathname();
  const routerArr = router.split("/");
  const arrLen = routerArr.length;

  const handleUnderline = (link: string) =>
    routerArr[arrLen - 1] === link ? "underline" : "";

  return (
    <>
      <Link
        href="/dashboard"
        className={`hover:underline ${handleUnderline("dashboard")}`}
      >
        Dashboard
      </Link>
      <Link
        href="/admin"
        className={`hover:underline ${handleUnderline("admin")}`}
      >
        Admin
      </Link>
    </>
  );
}
