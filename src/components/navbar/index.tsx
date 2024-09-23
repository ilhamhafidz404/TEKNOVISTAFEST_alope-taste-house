import { useEffect, useState } from "react";
import StoreIcon from "../icons/store";
import NavbarAction from "./action";
import NavbarLinks from "./links";
import FullScreenNav from "./fullScreenNav";

export default function Navbar() {
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      nav?.classList.toggle("bg-[#191f25]", window.scrollY > 100);
      nav?.classList.toggle("!py-3", window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <nav className="transition duration-500 py-7 px-5 md:px-10 lg:px-20 grid grid-cols-3 items-center fixed top-0 left-0 right-0 text-gray-200 z-50">
        <NavbarLinks />
        <div className="col-span-2 md:col-span-1">
          <p className="text-xl font-semibold flex justify-center items-center gap-3">
            <StoreIcon />
            ALOPE Taste House
          </p>
        </div>
        <NavbarAction />
        <div className="flex md:hidden justify-end">
          <button
            className="p-2 rounded-md bg-[#bc8b57] hover:bg-[#bc8b57]/80 text-white text-sm flex items-center gap-2 justify-center"
            onClick={() => {
              setShowFullScreenNav(!showFullScreenNav);
            }}
          >
            =
          </button>
        </div>
      </nav>
      <FullScreenNav show={showFullScreenNav} />
    </>
  );
}
