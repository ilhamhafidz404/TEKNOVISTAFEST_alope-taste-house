import Benefit from "../sections/benefit";
import Chef from "../sections/chef";
import Header from "../sections/header";
import MenuSection from "../sections/menu";
import Restaurant from "../sections/restaurant";

export default function HomeView() {
  return (
    <>
      <Header />
      <main className="lg:px-20 md:px-10 px-5">
        <Benefit />
        <Restaurant />
        <MenuSection />
        <Chef />
      </main>
    </>
  );
}
