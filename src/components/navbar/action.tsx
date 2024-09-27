import NavbarSearch from "./search";

export default function NavbarAction() {
  return (
    <div className="hidden md:flex gap-2 justify-end">
      <NavbarSearch />
      <button className="px-5 py-3 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium">
        Reservasi
      </button>
    </div>
  );
}
