import GliderComponent from "react-glider";
import MenuCard from "./card";
import { Subtitle, Title } from "../../../components/text";
import Button from "../../../components/button";
import { ChevronLeft, ChevronRight } from "../../../components/icons/chevron";
import menus from "../../../data/menus.json";

export default function MenuSection() {
  return (
    <section className="mt-20">
      <div className="mb-10 md:flex items-center justify-between">
        <div>
          <Subtitle text="Our Delicious Menu" />
          <Title text="Eat the Variety of Awesome Ingredient" />
        </div>
        <div className="md:mt-0 mt-5">
          <Button text="See Al Menu" />
        </div>
      </div>
      <GliderComponent
        draggable
        hasArrows
        hasDots
        slidesToShow={4}
        slidesToScroll={1}
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
