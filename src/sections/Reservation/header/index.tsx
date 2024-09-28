import HeaderBookFormReservation from "./bookForm";

export default function HeaderReservationSection() {
  return (
    <>
      <header className="h-[500px] bg-[url(/header.jpg)] bg-cover relative after:absolute after:inset-0 after:bg-[#0e1317]/30 flex items-center justify-center">
        <div className="w-10/12 lg:w-2/3 text-center z-10 relative">
          <h1 className="text-[#bc8b57] font-bold text-xl md:text-2xl">
            BOOK YOUR TABLE
          </h1>
          <h2 className="text-white text-3xl lg:text-4xl md:text-6xl font-bold mt-5">
            Online Reservations Available
          </h2>
          <p className="text-gray-100 mt-5 text-sm md:text-base">
            OR CALL US AT 0123-5576-83644 FROM 11:00 AM TO 7:00 PM
          </p>
        </div>

        <HeaderBookFormReservation />
      </header>
    </>
  );
}
