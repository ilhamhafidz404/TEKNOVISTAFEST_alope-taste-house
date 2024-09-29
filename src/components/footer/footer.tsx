import StoreIcon from "../icons/store";
import FooterInstaPost from "./post";
import FooterSectionLinks from "./sectionLinks";
import FooterPageLinks from "./pageLinks";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="mt-20 px-5 md:px-10 xl:px-20 bg-[#191f25] grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 shadow">
        <div>
          <p className="text-2xl font-semibold flex items-center gap-2">
            <StoreIcon myClass="size-6 text-[#bc8b57]" />
            <span className="text-gray-100">ALOPE Taste House</span>
          </p>
          <p className="mt-2 text-gray-300">
            Welcome to ALOPE Taste House, where passion for delicious food meets
            a warm and inviting atmosphere.
          </p>

          <div className="mt-7 bg-[#0e1317] px-5 py-3 rounded inline-block">
            <p className="text-white mb-3 text-sm">Switch Language</p>
            <div className="flex gap-4 items-center">
              <Link
                to={"?lang=en"}
                className="border-4 border-[#ce9a64] rounded-full"
              >
                <img
                  src="/logo/us.svg"
                  alt="US flag img from flat icon"
                  width={35}
                  height={35}
                />
              </Link>
              <Link to={"?lang=id"}>
                <img
                  src="/logo/indonesia.svg"
                  alt="Indonesia flag img from flat icon"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-28">
          <FooterPageLinks />
          <FooterSectionLinks />
        </div>
        <FooterInstaPost />
      </div>
      <div className="col-span-3 bg-gradient-to-r from-[#bc8b57] to-[#e4ae74] py-2">
        <p className="text-white text-center text-sm">Copyright &copy; 2024</p>
      </div>
    </footer>
  );
}
