import { Link } from "react-router-dom";

export default function FooterPageLinks({ lang }: { lang: string }) {
  return (
    <div>
      <p className="font-semibold mb-2 text-gray-100">
        {lang == "en" ? "Pages" : "Halaman"}
      </p>
      <ul>
        <li className="mb-1">
          <Link to={"/"} className="text-gray-300 hover:text-[#bc8b57]">
            {lang == "en" ? "Home" : "Beranda"}
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/location"} className="text-gray-300 hover:text-[#bc8b57]">
            {lang == "en" ? "Location" : "Lokasi"}
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/menu"} className="text-gray-300 hover:text-[#bc8b57]">
            Menu
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/chef"} className="text-gray-300 hover:text-[#bc8b57]">
            {lang == "en" ? "Chef" : "Koki"}
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to={"/reservation"}
            className="text-gray-300 hover:text-[#bc8b57]"
          >
            {lang == "en" ? "Reservation" : "Reservasi"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
