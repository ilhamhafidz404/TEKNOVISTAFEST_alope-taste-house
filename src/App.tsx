import { Route, Routes } from "react-router-dom";

// component
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// view
import HomeView from "./views/Home";
import MenuView from "./views/Menu";
import ChefView from "./views/Chef";
import LocationView from "./views/Location";
import ReservationView from "./views/Reservation";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/chef" element={<ChefView />} />
        <Route path="/location" element={<LocationView />} />
        <Route path="/reservation" element={<ReservationView />} />
      </Routes>

      <Footer />
    </>
  );
}
