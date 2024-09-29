import { Link } from "react-router-dom";
import NavbarSearch from "./navbarSearch";
import BarsIcon from "../icons/bars";

export default function NavbarAction({
  toggleNavScreen,
  lang,
}: {
  toggleNavScreen: () => void;
  lang: string;
}) {
  return (
    <div className="hidden md:flex gap-2 justify-end">
      <NavbarSearch lang={lang} />
      <Link
        to={"/reservation"}
        className="hidden xl:inline-block px-5 py-3 rounded-md text-white border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium"
      >
        {lang == "en" ? "Reservation" : "Reservasi"}
      </Link>

      <button
        title="Toggle fullscreen nav"
        aria-label="Toggle fullscreen nav"
        type="button"
        className="p-1 sm:p-2 rounded-md bg-[#bc8b57] hover:bg-[#edc599] text-white text-sm xl:hidden flex items-center gap-2 justify-center"
        onClick={() => {
          toggleNavScreen();
        }}
      >
        <BarsIcon myClass="size-5 sm:size-6" />
      </button>
    </div>
  );
}
