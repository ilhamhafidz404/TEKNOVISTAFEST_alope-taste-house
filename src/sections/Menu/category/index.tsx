import MenuCard from "./card";

import menuWithCategories from "./../../../data/menuWithCategories.json";

export default function MenuCategory() {
  return (
    <>
      <MenuCard
        title="Pizza Menu"
        img="/menu/pizza.jpg"
        id="pizza"
        index={1}
        menus={menuWithCategories.pizza}
      />
      <div className="bg-[#191f25] py-16 mt-20">
        <MenuCard
          title="Burger Menu"
          img="/menu/burger.jpg"
          id="burger"
          index={2}
          menus={menuWithCategories.burger}
        />
      </div>
      <MenuCard
        title="Sandwitch Menu"
        img="/menu/hotdog.jpg"
        id="sandwitch"
        index={3}
        menus={menuWithCategories.sandwitch}
      />
    </>
  );
}
