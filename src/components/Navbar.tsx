"use client";

import Link from "next/link";
import NavLinkContainer from "./NavLinkContainer";
import Button from "./Button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className="navbar border-b border-black py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <NavLinkContainer isMobile />
        </div>
        <Link
          href="/"
          className="text-4xl font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent"
        >
          OLABU
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLinkContainer />
      </div>
      <div className="flex gap-2 navbar-end">
        {isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : session ? (
          <>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
              <Image
                alt={user!.name}
                height={80}
                width={80}
                src={user!.image ?? ""}
              />
            </div>
            <Button
              text="Logout"
              type="risk"
              task="button"
              onClick={handleLogout}
            />
          </>
        ) : (
          <>
            <Button
              text="Login"
              type="primary"
              task="hyperlink"
              href="/login"
            />
            <div className="hidden md:flex">
              <Button
                text="Register"
                type="secondary"
                task="hyperlink"
                href="/register"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
