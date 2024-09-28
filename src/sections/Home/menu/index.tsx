import GliderComponent from "react-glider";
import MenuCard from "./card";
import { Subtitle, Title } from "../../../components/text";
import Button from "../../../components/button";
import { ChevronLeft, ChevronRight } from "../../../components/icons/chevron";
import menus from "../../../data/menus.json";

export default function MenuSection() {
  return (
    <section id="menu" className="mt-20 scroll-mt-20">
      <div className="mb-10 md:flex items-center justify-between">
        <div>
          <Subtitle text="Our Delicious Menu" />
          <Title text="Eat the Variety of Awesome Ingredient" />
        </div>
        <div className="md:mt-0 mt-5">
          <Button text="See Al Menu" to="/menu" />
        </div>
      </div>
      <GliderComponent
        draggable
        hasArrows
        hasDots
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 640, // untuk layar kecil (mobile)
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768, // untuk layar sedang (tablet)
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024, // untuk layar besar (desktop)
            settings: {
              slidesToShow: 4,
            },
          },
        ]}
        iconLeft={<ChevronLeft myClass="size-10" />}
        iconRight={<ChevronRight myClass="size-10" />}
      >
        {menus.map((menu, index) => (
          <MenuCard key={index} menu={menu} />
        ))}
      </GliderComponent>
    </section>
  );
}
