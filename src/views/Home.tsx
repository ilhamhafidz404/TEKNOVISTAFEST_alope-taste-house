import { useEffect } from "react";
import Benefit from "../sections/Home/benefit";
import Chef from "../sections/Home/chef";
import Header from "../sections/Home/header";
import MenuSection from "../sections/Home/menu";
import Restaurant from "../sections/Home/restaurant";

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
