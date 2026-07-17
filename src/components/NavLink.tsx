"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  text: string;
  href: string;
}

export default function NavLink(props: NavLinkProps) {
  const currPath = usePathname();

  return (
    <li>
      <Link className={`${currPath === props.href ? "font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-transparent bg-clip-text" : ""} hover:scale-105 transition-transform duration-200`} href={props.href}>
        {props.text}
      </Link>
    </li>
  );
}
