import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
//
import Benefit from "../sections/Home/benefit/homeBenefit";
import Chef from "../sections/Home/chef/homeChef";
import Header from "../sections/Home/header/homeHeader";
import MenuSection from "../sections/Home/menu/homeMenu";
import Restaurant from "../sections/Home/restaurant/homeRestaurant";

export default function HomeView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <Header lang={lang} />
      <main className="xl:px-20 md:px-10 px-5">
        <Benefit lang={lang} />
        <Restaurant lang={lang} />
        <MenuSection lang={lang} />
        <Chef lang={lang} />
      </main>
    </>
  );
}
