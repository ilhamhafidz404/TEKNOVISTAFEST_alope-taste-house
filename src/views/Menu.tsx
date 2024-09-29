import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

//
import Button from "../components/button/button";
import Header from "../components/header/header";
import MenuCategory from "../sections/Menu/category/menuCategory";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  return (
    <>
      {/* header menu from png wing */}
      <Header
        title={lang == "en" ? "Our Menu" : "Menu Kami"}
        description={
          lang == "en"
            ? "Enjoy a variety of our best menu choices. From appetizers to desserts, we serve a variety of deliciousness made with fresh, quality ingredients. Each dish is prepared with love and expertise to provide a satisfying culinary experience."
            : "Nikmati beragam pilihan menu terbaik kami. Mulai dari hidangan pembuka hingga hidangan penutup, kami menyajikan beragam kelezatan yang dibuat dengan bahan-bahan segar dan berkualitas. Setiap hidangan diolah dengan cinta dan keahlian untuk memberikan pengalaman kuliner yang memuaskan."
        }
        img={["/header/burger.png", "/header/pizza.png", "/header/bbq.png"]}
        currentImg="/header/burger.png"
      />
      <MenuCategory lang={lang} />
      {/* https://unsplash.com/photos/a-table-with-two-chairs-and-a-potted-plant-Z2LLFoSQF7k */}
      <section className="relative z-10 px-5 md:px-10 xl:px-20 flex md:flex-row flex-col gap-10 items-center justify-center md:justify-between h-[250px] bg-fixed bg-[url(/reservation.jpg)] bg-cover bg-center -mb-20 mt-28 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10">
        <div className="md:text-left text-center">
          <p className="font-medium text-xl md:text-2xl text-[#bc8b57] uppercase">
            {lang == "en" ? "Ready to Eat?" : "Siap Makan Sajian Kami?"}
          </p>
          <h1 className="text-4xl lg:text-6xl text-white font-bold">
            {lang == "en" ? "Our Menu" : "Menu Kami"}
          </h1>
        </div>
        <div>
          <Button
            text={lang == "en" ? "Reservation" : "Reservasi"}
            to="/reservation"
          />
        </div>
      </section>
    </>
  );
}
