import { Subtitle, Title } from "../../../components/text";
import MenuListItem from "./item";

export default function MenuCard({
  title,
  img,
  id,
  index,
}: {
  title: string;
  img: string;
  id: string;
  index: number;
}) {
  return (
    <section
      id={id}
      className={`px-5 md:px-10 xl:px-20 scroll-mt-20 ${index != 2 && "mt-28"}`}
    >
      <div className="text-center">
        <Subtitle text="Our Menu" />
        <Title text={title} />
      </div>
      <div
        className={`grid xl:grid-cols-5 ${
          index != 2 ? "bg-[#191f25]" : "bg-[#0e1317]"
        } xl:gap-14 items-center mt-10 max-h-[700px] xl:max-h-[650px] overflow-hidden`}
      >
        {index % 2 == 0 && (
          <div className="xl:col-span-2">
            <img
              src={img}
              alt="img from unsplash"
              className="h-[200px] xl:h-[650px] w-full object-cover object-center"
              width={"auto"}
              height={"auto"}
            />
          </div>
        )}
        <div
          className={`xl:col-span-3 ${
            index != 2
              ? "xl:pl-20 md:px-10 md:pt-10 sm:px-5 sm:pt-5 px-3 pt-3"
              : "xl:pr-20 md:px-10 md:pt-10 sm:px-5 sm:pt-5 px-3 pt-3"
          }`}
        >
          <MenuListItem
            name="Spinach Artichoke Dip"
            description="Tastes great with tortilla chips, pita bread, or crackers."
            price="20.000"
          />
          <MenuListItem
            name="Pigs In a Blanket"
            description="Hot dogs, crescent rolls, and American cheese"
            price="120.000"
          />
          <MenuListItem
            name="Crockpot Buffalo Chicken Wings"
            description="Juicy tender chicken fried to perfection"
            price="30.000"
          />
          <MenuListItem
            name="Cream Cheese Fruit Dip"
            description="Food Tray with cream cheese"
            price="70.000"
          />
          <MenuListItem
            name="Cowboy Crack Dip"
            description="Flavoured cheesy sausage dip"
            price="80.000"
          />
        </div>
        {index % 2 != 0 && (
          <div className="xl:col-span-2">
            <img
              src={img}
              alt="img from unsplash"
              className="h-[200px] xl:h-[650px] w-full object-cover object-center"
              width={"auto"}
              height={"auto"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
