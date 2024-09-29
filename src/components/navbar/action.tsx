import { Link } from "react-router-dom";
import NavbarSearch from "./search";
import BarsIcon from "../icons/bars";

export default function NavbarAction({
  toggleNavScreen,
}: {
  toggleNavScreen: () => void;
}) {
  return (
    <div className="hidden md:flex gap-2 justify-end">
      <NavbarSearch />
      <Link
        to={"/reservation"}
        className="hidden xl:inline-block px-5 py-3 rounded-md text-white border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium"
      >
        Reservation
      </Link>

      <button
        className="p-1 sm:p-2 rounded-md bg-[#bc8b57] hover:bg-[#bc8b57]/80 text-white text-sm xl:hidden flex items-center gap-2 justify-center"
        onClick={() => {
          toggleNavScreen();
        }}
      >
        <BarsIcon myClass="size-5 sm:size-6" />
      </button>
    </div>
  );
}
