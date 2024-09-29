import { NavLink } from "react-router-dom";

export default function NavbarLinks() {
  const baseClass =
    "after:content-[''] after:bottom-0 after:h-[5px] after:bg-[#bc8b57] after:absolute after:rounded-full relative pb-2";

  const addedHoverClass =
    "hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2";

  const addedActiveClass =
    "after:w-full after:left-0 after:right-0 after:transition-all after:duration-500";

  return (
    <div className="hidden xl:block">
      <ul className="flex gap-5 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chef"
            className={({ isActive }) =>
              `${baseClass} ${addedHoverClass} ${
                isActive ? addedActiveClass : ""
              }`
            }
          >
            Chef
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
