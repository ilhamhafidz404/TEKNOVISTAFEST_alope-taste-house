import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//
import StoreIcon from "../icons/store";
import NavbarAction from "./navbarAction";
import NavbarLinks from "./navbarLinks";
import FullScreenNav from "./fullScreenNav";
import BarsIcon from "../icons/bars";

export default function Navbar() {
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      nav?.classList.toggle("bg-[#191f25]", window.scrollY > 100);
      nav?.classList.toggle("!py-3", window.scrollY > 100);
    });
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <nav className="transition duration-500 py-7 px-5 md:px-10 xl:px-20 grid grid-cols-2 xl:grid-cols-3 items-center fixed top-0 left-0 right-0 text-gray-200 z-50">
        <NavbarLinks lang={lang} />
        <div>
          <p className="text-sm sm:text-xl font-semibold flex xl:justify-center items-center gap-2 md:gap-3 whitespace-nowrap">
            <StoreIcon myClass={"size-5 sm:size-6 text-[#bc8b57]"} />
            ALOPE Taste House
          </p>
        </div>
        <NavbarAction
          toggleNavScreen={() => {
            setShowFullScreenNav(!showFullScreenNav);
          }}
          lang={lang}
        />
        <div className="flex md:hidden justify-end">
          <button
            title="Toggle fullscreen nav"
            aria-label="Toggle fullscreen nav"
            type="button"
            className="p-1 sm:p-2 rounded-md bg-[#bc8b57] hover:bg-[#edc599] text-white text-sm flex items-center gap-2 justify-center"
            onClick={() => {
              setShowFullScreenNav(!showFullScreenNav);
            }}
          >
            <BarsIcon myClass="size-5 sm:size-6" />
          </button>
        </div>
      </nav>
      <FullScreenNav
        show={showFullScreenNav}
        toggleNavScreen={() => {
          setShowFullScreenNav(!showFullScreenNav);
        }}
      />
    </>
  );
}
