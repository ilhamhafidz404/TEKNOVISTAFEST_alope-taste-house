import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="h-screen bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-xl md:text-2xl">
            Our Delicious Food Welcomes You
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-5">
            Where Food is Served with Enjoyment
          </h2>
          <p className="text-gray-100 mt-5 text-sm md:text-base">
            We use the best regionally grown vegetables and foraged ingredients
            on their menu, taking inspiration from the region. A creative menu
            list, refreshing drinks and a variety of seasonings with an
            extraordinary selection of spices go well with the food.
          </p>

          <div className="mt-10 inline-flex gap-5">
            <Link
              to={"/reservation"}
              className="px-5 py-3 rounded-md text-[#bc8b57] border-2 border-[#bc8b57] hover:bg-[#bc8b57] hover:text-white font-medium"
            >
              Reservation
            </Link>
            <Link
              to={"/menu"}
              className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium"
            >
              See Menu
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
