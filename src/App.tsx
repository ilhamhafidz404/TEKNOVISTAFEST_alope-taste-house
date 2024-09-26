import { Route, Routes } from "react-router-dom";

// component
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// view
import HomeView from "./views/Home";
import MenuView from "./views/Menu";
import ChefView from "./views/Chef";
import LocationView from "./views/Location";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/chef" element={<ChefView />} />
        <Route path="/location" element={<LocationView />} />
      </Routes>

      <Footer />
    </>
  );
}
