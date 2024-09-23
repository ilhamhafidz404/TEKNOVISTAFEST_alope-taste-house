import StoreIcon from "../icons/store";
import NavbarAction from "./action";
import NavbarLinks from "./links";

export default function Navbar() {
  return (
    <nav className="py-5 px-5 md:px-10 lg:px-20 grid grid-cols-3 items-center fixed top-0 left-0 right-0 text-gray-200 z-50">
      <NavbarLinks />
      <div className="col-span-3 md:col-span-1">
        <p className="text-xl font-semibold flex justify-center items-center gap-3">
          <StoreIcon />
          ALOPE Taste House
        </p>
      </div>
      <NavbarAction />
    </nav>
  );
}
