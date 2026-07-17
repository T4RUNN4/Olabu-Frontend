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
      <NavLink text="Rate Us" href="/rate-us" />
      <NavLink text="Add Wallboards" href="/add-wallboards" />
      <NavLink text="Manage Wallboards" href="/manage-wallboards" />
    </ul>
  );
}
