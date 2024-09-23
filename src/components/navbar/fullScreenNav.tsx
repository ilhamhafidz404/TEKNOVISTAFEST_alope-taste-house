export default function FullScreenNav({ show }: { show: boolean }) {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } fixed bg-[#191f25] z-40 left-0 right-0 bottom-0 h-full items-center justify-center`}
    >
      <div className="w-full px-10">
        {/* <div>
          <input
            type="text"
            className="bg-white py-3 px-5 shadow-sm rounded-md w-full"
            placeholder="Search your favorite food"
          />
        </div> */}
        <ul className="text-center mb-20">
          <li className="mb-4">
            <a
              href=""
              className="text-xl font-semibold text-white hover:text-[#bc8b57]"
            >
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              href=""
              className="text-xl font-semibold text-white hover:text-[#bc8b57]"
            >
              Gallery
            </a>
          </li>
          <li className="mb-4">
            <a
              href=""
              className="text-xl font-semibold text-white hover:text-[#bc8b57]"
            >
              Menu
            </a>
          </li>
          <li className="mb-4">
            <a
              href=""
              className="text-xl font-semibold text-white hover:text-[#bc8b57]"
            >
              Chef
            </a>
          </li>
        </ul>

        <div className="text-center">
          <button className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
