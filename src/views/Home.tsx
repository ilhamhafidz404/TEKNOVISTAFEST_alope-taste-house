import { useEffect } from "react";
import Benefit from "../sections/Home/benefit/homeBenefit";
import Chef from "../sections/Home/chef/homeChef";
import Header from "../sections/Home/header/homeHeader";
import MenuSection from "../sections/Home/menu/homeMenu";
import Restaurant from "../sections/Home/restaurant/homeRestaurant";

export default function HomeView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="xl:px-20 md:px-10 px-5">
        <Benefit />
        <Restaurant />
        <MenuSection />
        <Chef />
      </main>
    </>
  );
}
