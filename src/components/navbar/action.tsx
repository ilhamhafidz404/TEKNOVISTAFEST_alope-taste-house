import { useState } from "react";

export default function NavbarAction() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex gap-2 justify-end">
      <div className="relative w-2/3">
        <input
          type="text"
          className="bg-white py-3 px-5 shadow-sm rounded-md w-full"
          placeholder="       Search your favorite food"
          onChange={(e) => setSearch(e.target.value)}
        />
        {!search && (
          <span className="absolute left-[20px] top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
      <button className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium">
        Login
      </button>
    </div>
  );
}
