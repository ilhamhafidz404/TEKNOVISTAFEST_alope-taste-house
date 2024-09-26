import { useEffect } from "react";
import Button from "../components/button";
import MapIcon from "../components/icons/map";
import { Subtitle, Title } from "../components/text";
import Header from "../sections/Chef/header";

export default function ChefView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="text-center mt-20">
        <Subtitle text="Our Menu" />
        <Title text={"Professional Chef"} />
      </div>
      <div className="grid grid-cols-4 px-20 gap-5 mt-10">
        <div className="max-h-[350px]">
          <div className="overflow-hidden w-full h-full cursor-pointer">
            <img
              src="/chefs/andi.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              alt=""
            />
          </div>
          <div className="bg-[#191f25] p-3 border-t-[5px] border-[#bc8b57]">
            <p className="text-gray-200 font-semibold text-xl">Ilham Hafidz</p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <MapIcon myClass="size-5" />
              Kuningan Resto
            </p>
          </div>
        </div>
        <div className="max-h-[350px]">
          <div className="overflow-hidden w-full h-full cursor-pointer">
            <img
              src="/chefs/budi.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              alt=""
            />
          </div>
          <div className="bg-[#191f25] p-3 border-t-[5px] border-[#bc8b57]">
            <p className="text-gray-200 font-semibold text-xl">Ilham Hafidz</p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <MapIcon myClass="size-5" />
              Kuningan Resto
            </p>
          </div>
        </div>
        <div className="max-h-[350px]">
          <div className="overflow-hidden w-full h-full cursor-pointer">
            <img
              src="/chefs/indah.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              alt=""
            />
          </div>
          <div className="bg-[#191f25] p-3 border-t-[5px] border-[#bc8b57]">
            <p className="text-gray-200 font-semibold text-xl">Ilham Hafidz</p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <MapIcon myClass="size-5" />
              Kuningan Resto
            </p>
          </div>
        </div>
        <div className="max-h-[350px]">
          <div className="overflow-hidden w-full h-full cursor-pointer">
            <img
              src="/chefs/riko.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              alt=""
            />
          </div>
          <div className="bg-[#191f25] p-3 border-t-[5px] border-[#bc8b57]">
            <p className="text-gray-200 font-semibold text-xl">Ilham Hafidz</p>
            <p className="flex items-center gap-2 text-gray-400 mt-2">
              <MapIcon myClass="size-5" />
              Kuningan Resto
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* https://unsplash.com/photos/a-table-with-two-chairs-and-a-potted-plant-Z2LLFoSQF7k */}
      <section className="relative z-10 px-20 flex items-center justify-between h-[250px] bg-fixed bg-[url(/reservation.jpg)] bg-cover bg-center -mb-20 mt-28 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10">
        <div>
          <p className="font-medium text-2xl text-[#bc8b57] uppercase">
            Ready to Eat?
          </p>
          <h1 className="text-6xl text-white font-bold">Our Menu</h1>
        </div>
        <div>
          <Button text="Reservation" />
        </div>
      </section>
    </>
  );
}
