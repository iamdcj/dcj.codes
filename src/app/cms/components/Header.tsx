"use client";

import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";
import Cookies from "js-cookie";

export default function CMSHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3001/api/authentication/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: Cookies.get("dcj_acc_token") || "",
        },
      });

      router.push("/login");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <header>
      <Logo isRelative root="/cms" />
      <Link href="/">Home</Link>

      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
