import Link from "next/link";
import NavLinkContainer from "./NavLinkContainer";
import Button from "./Button";

export default function Navbar() {
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
      <div className="felx flex-col md:flex-row gap-2 navbar-end">
        <Button text="Login" type="primary" btnType="button" />
        <Button text="Register" type="secondary" btnType="button" />
      </div>
    </div>
  );
}
