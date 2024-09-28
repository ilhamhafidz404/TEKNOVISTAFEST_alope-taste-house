import StoreIcon from "../icons/store";
import FooterInstaPost from "./post";
import FooterSectionLinks from "./sectionLinks";
import FooterPageLinks from "./pageLinks";

export default function Footer() {
  return (
    <footer>
      <div className="mt-20 px-5 md:px-10 xl:px-20 bg-[#191f25] grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 shadow">
        <div>
          <p className="text-2xl font-semibold flex items-center gap-2">
            <StoreIcon />
            <span className="text-gray-100">ALOPE Taste House</span>
          </p>
          <p className="mt-2 text-gray-300">
            Welcome to ALOPE Taste House, where passion for great food meets a
            warm and inviting atmosphere. Our journey began with a simple goal:
            to offer delicious, freshly prepared meals made from the finest
            ingredients.
          </p>
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
