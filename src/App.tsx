import Benefit from "./sections/benefit";
import Header from "./sections/header";
import Navbar from "./components/navbar";
import Restaurant from "./sections/restaurant";
import Chef from "./sections/chef";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="px-20">
        <Benefit />
        <Restaurant />
        <Chef />
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
