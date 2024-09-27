import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="h-screen bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-gradient-to-t from-[#0e1317] to to-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-xl md:text-2xl">
            Maakanan Kami Siap Menggugah Anda
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold mt-5">
            Rasakan Sensasi Ketagihan Sebenarnya
          </h2>
          <p className="text-gray-100 mt-5 text-sm md:text-base">
            Kami menggunakan bahan-bahan terbaik di tiap sayuran, buah dan bumbu
            yang disajikan untuk anda. Menu western seperti Burger, Hotdog dan
            Pizza bisa anda rasakan, begitupula makanan Tradisional Indonesia
            yang akan membuat anda merasakan menu racikan Warisan Nusantara.
          </p>

          <div className="mt-10 inline-flex gap-5">
            <button className="px-5 py-3 rounded-md text-[#bc8b57] border-2 border-[#bc8b57] hover:bg-[#bc8b57] hover:text-white font-medium">
              Reservasi
            </button>
            <Link
              to={"/menu"}
              className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
