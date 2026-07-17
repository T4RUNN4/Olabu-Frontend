import NavLink from "./NavLink";

interface NavLinkContainerProps {
  isMobile?: boolean;
}

export default function NavLinkContainer(props: NavLinkContainerProps) {
  return (
    <ul
      tabIndex={props.isMobile ? "-1" : "undefined"}
      className={
        props.isMobile
          ? "menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          : "menu menu-horizontal px-1"
      }
    >
      <NavLink text="Home" href="/" />
      <NavLink text="Wallboards" href="/wallboards" />
      <NavLink text="Reviews" href="/customer-reviews" />
      <NavLink text="Your Cart" href="/your-cart" />
      <NavLink text="Your Orders" href="/your-orders" />
      <NavLink text="Manage Wallboards" href="/manage-wallboards" />
      <NavLink text="Manage Orders" href="/manage-orders" />
    </ul>
  );
}
