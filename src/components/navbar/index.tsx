import StoreIcon from "../icons/store";
import NavbarAction from "./action";
import NavbarLinks from "./links";

export default function Navbar() {
  return (
    <nav className="py-5 px-20 grid grid-cols-3 items-center">
      <NavbarLinks />
      <div>
        <p className="text-xl font-semibold flex justify-center items-center gap-3">
          <StoreIcon />
          ALOPE Taste House
        </p>
      </div>
      <NavbarAction />
    </nav>
  );
}
