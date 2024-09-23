import Benefit from "./sections/benefit";
import Header from "./sections/header";
import Navbar from "./components/navbar";
import Restaurant from "./sections/restaurant";
import Chef from "./sections/chef";
import Footer from "./components/footer";
import MenuSection from "./sections/menu";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="lg:px-20 md:px-10 px-5">
        <Benefit />
        <Restaurant />
        <MenuSection />
        <Chef />
      </main>

      <Footer />
    </>
  );
}
