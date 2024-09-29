import { useEffect } from "react";
import Button from "../components/button/button";
import MenuCategory from "../sections/Menu/category/locationCategory";
import Header from "../components/header/header";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header
        title="Our Menu"
        description="Enjoy a variety of our best menu choices. From appetizers to desserts,
          we serve a variety of deliciousness made with fresh, quality
          ingredients. Each dish is prepared with love and expertise to provide
          a satisfying culinary experience."
        img={["/header/burger.png", "/header/pizza.png", "/header/bbq.png"]}
        currentImg="/header/burger.png"
      />
      <MenuCategory />
      {/* https://unsplash.com/photos/a-table-with-two-chairs-and-a-potted-plant-Z2LLFoSQF7k */}
      <section className="relative z-10 px-5 md:px-10 xl:px-20 flex md:flex-row flex-col gap-10 items-center justify-center md:justify-between h-[250px] bg-fixed bg-[url(/reservation.jpg)] bg-cover bg-center -mb-20 mt-28 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10">
        <div className="md:text-left text-center">
          <p className="font-medium text-xl md:text-2xl text-[#bc8b57] uppercase">
            Ready to Eat?
          </p>
          <h1 className="text-4xl lg:text-6xl text-white font-bold">
            Our Menu
          </h1>
        </div>
        <div>
          <Button text="Reservation" to="/reservation" />
        </div>
      </section>
    </>
  );
}
