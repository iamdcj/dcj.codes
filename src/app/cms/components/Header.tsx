"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";
import Cookies from "js-cookie";

export default function CMSHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authentication/logout`, {
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
      <nav>
        <ul className="flex justify-between items-center w-[100%] py-2 px-5 bg-white text-black">
          <li>
            <div className="flex items-center">
              <Link className="text-inherit" href="/cms">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              <Link className="text-inherit" href="/cms/new">
                New Post+
              </Link>
            </div>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
