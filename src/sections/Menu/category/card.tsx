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
    <section id={id} className={`px-20 scroll-mt-20 ${index != 2 && "mt-28"}`}>
      <div className="text-center">
        <Subtitle text="Our Menu" />
        <Title text={title} />
      </div>
      <div
        className={`grid grid-cols-5 ${
          index != 2 ? "bg-[#191f25]" : "bg-[#0e1317]"
        } gap-14 items-center mt-10 max-h-[650px]`}
      >
        {index % 2 == 0 && (
          <div className="col-span-2">
            <img src={img} alt="" className="h-[650px] w-full object-cover" />
          </div>
        )}
        <div className={`col-span-3 ${index != 2 ? "pl-20" : "pr-20"}`}>
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
          <div className="col-span-2">
            <img src={img} alt="" className="h-[650px] w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
