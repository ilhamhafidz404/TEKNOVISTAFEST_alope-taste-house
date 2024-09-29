import { Link } from "react-router-dom";

export default function Header({ lang }: { lang: string }) {
  return (
    <>
      {/* img header from unsplash */}
      <header className="h-screen bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-xl md:text-2xl">
            {lang == "en"
              ? "Our Delicious Food Welcomes You"
              : "Makanan Lezat Kami Siap Menyambut Anda"}
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-5">
            {lang == "en"
              ? "Where Food is Served with Enjoyment"
              : "Dimana Makanan Disajikan dengan Nikmat"}
          </h2>
          <p className="text-gray-100 mt-5 text-sm md:text-base">
            {lang == "en"
              ? "We use the best regionally grown vegetables and foraged ingredients on their menu, taking inspiration from the region. A creative menu list, refreshing drinks and a variety of seasonings with an extraordinary selection of spices go well with the food."
              : "Kami menggunakan sayur-sayuran terbaik yang ditanam secara lokal dan bahan-bahan hijauan pada menu mereka, mengambil inspirasi dari daerah tersebut. Daftar menu yang kreatif, minuman menyegarkan dan beragam bumbu dengan pilihan bumbu yang luar biasa cocok dengan makanannya."}
          </p>

          <div className="mt-10 inline-flex gap-5">
            <Link
              to={"/reservation"}
              className="px-5 py-3 rounded-md text-[#bc8b57] border-2 border-[#bc8b57] hover:bg-[#bc8b57] hover:text-white font-medium"
            >
              {lang == "en" ? "Reservation" : "Reservasi"}
            </Link>
            <Link
              to={"/menu"}
              className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium"
            >
              {lang == "en" ? "See Menu" : "Lihat Menu"}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
