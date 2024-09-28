import { Link } from "react-router-dom";

export default function FooterPageLinks() {
  return (
    <div>
      <p className="font-semibold mb-2 text-gray-100">Pages</p>
      <ul>
        <li className="mb-1">
          <Link to={"/"} className="text-gray-300 hover:text-[#bc8b57]">
            Home
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/location"} className="text-gray-300 hover:text-[#bc8b57]">
            Location
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/menu"} className="text-gray-300 hover:text-[#bc8b57]">
            Menu
          </Link>
        </li>
        <li className="mb-1">
          <Link to={"/chef"} className="text-gray-300 hover:text-[#bc8b57]">
            Chef
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to={"/reservation"}
            className="text-gray-300 hover:text-[#bc8b57]"
          >
            Reservation
          </Link>
        </li>
      </ul>
    </div>
  );
}
