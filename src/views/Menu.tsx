import { useEffect } from "react";
import Button from "../components/button";
import MenuCategory from "../sections/Menu/category";
import Header from "../sections/Menu/header";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <MenuCategory />
      {/* https://unsplash.com/photos/a-table-with-two-chairs-and-a-potted-plant-Z2LLFoSQF7k */}
      <section className="relative z-10 px-20 flex items-center justify-between h-[250px] bg-fixed bg-[url(/reservation.jpg)] bg-cover bg-center -mb-20 mt-28 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10">
        <div>
          <p className="font-medium text-2xl text-[#bc8b57] uppercase">
            Ready to Eat?
          </p>
          <h1 className="text-6xl text-white font-bold">Our Menu</h1>
        </div>
        <div>
          <Button text="Reservation" to="/reservation" />
        </div>
      </section>
    </>
  );
}
