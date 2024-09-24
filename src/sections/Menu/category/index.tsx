import MenuCard from "./card";

export default function MenuCategory() {
  return (
    <>
      <MenuCard title="Breakfast Menu" img="/menu/pizza.jpg" index={1} />
      <div className="bg-[#191f25] py-16 mt-20">
        <MenuCard title="Lunch Menu" img="/menu/burger.jpg" index={2} />
      </div>
      <MenuCard title="Dinner Menu" img="/menu/hotdog.jpg" index={3} />
    </>
  );
}
