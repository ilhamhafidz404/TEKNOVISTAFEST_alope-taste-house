import MenuCard from "./menuCategoryCard";

import menuWithCategories from "../../../data/menuWithCategories.json";

export default function MenuCategory({ lang }: { lang: string }) {
  return (
    <>
      <MenuCard
        title={lang == "en" ? "Pizza Menu" : "Menu Pizza"}
        img="/menu/pizza.jpg"
        id="pizza"
        index={1}
        menus={menuWithCategories.pizza}
        lang={lang}
      />
      <div className="bg-[#191f25] py-16 mt-20">
        <MenuCard
          title={lang == "en" ? "Burger Menu" : "Menu Burger"}
          img="/menu/burger.jpg"
          id="burger"
          index={2}
          menus={menuWithCategories.burger}
          lang={lang}
        />
      </div>
      <MenuCard
        title={lang == "en" ? "Sandwitch Menu" : "menu Sandwitch"}
        img="/menu/hotdog.jpg"
        id="sandwitch"
        index={3}
        menus={menuWithCategories.sandwitch}
        lang={lang}
      />
    </>
  );
}
