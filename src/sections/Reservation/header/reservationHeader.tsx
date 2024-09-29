import HeaderBookFormReservation from "./reservationBookForm";

export default function HeaderReservationSection({ lang }: { lang: string }) {
  return (
    <>
      <header className="h-[500px] bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-[#0e1317]/50 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-xl md:text-2xl">
            {lang == "en" ? "BOOK YOUR TABLE" : "PESAN MEJA ANDA"}
          </h1>
          <h2 className="text-white text-3xl lg:text-4xl md:text-6xl font-bold mt-5">
            {lang == "en"
              ? "Online Reservations Available"
              : "Reservasi Online Tersedia"}
          </h2>
          <p className="text-gray-100 mt-5 text-sm md:text-base">
            {lang == "en"
              ? "OR CALL US AT 0838-7135-2030 FROM 11:00 AM TO 7:00 PM"
              : "ATAU HUBUNGI KAMI DI 0838-7135-2030 DARI JAM 11 SIANG - 7 MALAM"}
          </p>
        </div>

        <HeaderBookFormReservation lang={lang} />
      </header>
    </>
  );
}
