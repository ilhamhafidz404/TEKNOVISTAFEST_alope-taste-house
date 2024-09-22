import Benefit from "./components/benefit";
import Header from "./components/header";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="px-20">
        <Benefit />
      </main>
    </>
  );
}
