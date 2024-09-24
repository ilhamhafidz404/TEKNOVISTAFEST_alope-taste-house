import { NavLink } from "react-router-dom";

export default function NavbarLinks() {
  const baseClass =
    "after:content-[''] after:bottom-0 after:h-[5px] after:bg-[#bc8b57] after:absolute after:rounded-full relative pb-2";

  const addedHoverClass =
    "hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2";

  const addedActiveClass = "after:left-0 after:right-0";

  return (
    <div className="hidden md:block">
      <ul className="flex gap-5 font-medium">
        <li>
          <NavLink to="/" className={`${baseClass} ${addedActiveClass}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={`${baseClass} ${addedHoverClass}`}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="" className={`${baseClass} ${addedHoverClass}`}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="" className={`${baseClass} ${addedHoverClass}`}>
            Chef
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
