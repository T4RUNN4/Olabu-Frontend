import Link from "next/link";
import NavLinkContainer from "./NavLinkContainer";

export default function Footer() {
    return (
      <footer className="footer sm:footer-horizontal p-10 border-t border-gray-300">
        <aside>
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent"
          >
            OLABU
          </Link>
          <p>Snapchat for your wall</p>
        </aside>
        <nav>
          <NavLinkContainer />
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61588844795333">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            <Link href="tel:+8801870850906">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path d="M14.05 3a9 9 0 0 1 8 8"></path>
                <path d="M17.05 6A5 5 0 0 1 20 11"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    );
}