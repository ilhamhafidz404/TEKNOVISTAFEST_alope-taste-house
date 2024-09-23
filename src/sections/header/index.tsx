export default function Header() {
  return (
    <>
      <header className="pl-20 h-screen bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-1/2 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-2xl">
            Our Food Paradise Welcomes You
          </h1>
          <h2 className="text-white text-6xl font-bold mt-5">
            Where Food Meets Soul
          </h2>
          <p className="text-gray-200 mt-5">
            We use the best regionally grown vegetables and foraged ingredients
            on their menu, drawing inspiration from the area. A creative wine
            list, refreshing cocktails, and an amazing assortment of gins,
            spirits, liqueurs & beers go well with the food.
          </p>

          <div className="mt-10 inline-flex gap-5">
            <button className="px-5 py-3 rounded-md text-[#bc8b57] border-2 border-[#bc8b57] hover:bg-[#bc8b57] hover:text-white font-medium">
              Reservation
            </button>
            <button className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium">
              See Menu
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
