import { Route, Routes } from "react-router-dom";

// component
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// view
import HomeView from "./views/Home";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/contact" element={<p>contact</p>} />
      </Routes>

      <Footer />
    </>
  );
}
