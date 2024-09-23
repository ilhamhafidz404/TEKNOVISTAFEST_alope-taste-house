import StoreIcon from "../icons/store";
import FooterInstaPost from "./post";

export default function Footer() {
  return (
    <footer>
      <div className="mt-20 px-20 bg-white grid grid-cols-3 gap-10 py-10 shadow">
        <div>
          <p className="text-2xl font-semibold flex items-center gap-2">
            <StoreIcon />
            <span>ALOPE Taste House</span>
          </p>
          <p className="mt-2 text-gray-700">
            Welcome to ALOPE Taste House, where passion for great food meets a
            warm and inviting atmosphere. Our journey began with a simple goal:
            to offer delicious, freshly prepared meals made from the finest
            ingredients.
          </p>
        </div>
        <div className="flex gap-28">
          <div>
            <p className="font-semibold mb-2">Pages</p>
            <ul>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Gallery
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Menu
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Chef
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Section</p>
            <ul>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Header
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Benefits
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Restaurants
                </a>
              </li>
              <li className="mb-1">
                <a href="" className="text-gray-700 hover:text-indigo-500">
                  Chefs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <FooterInstaPost />
      </div>
      <div className="col-span-3 bg-gradient-to-r from-indigo-500 to-purple-500 py-2">
        <p className="text-white text-center text-sm">Copyright &copy; 2024</p>
      </div>
    </footer>
  );
}
