import { useEffect } from "react";
import Header from "../sections/Location/header";
import LocationMapSection from "../sections/Location/map";
import { Subtitle, Title } from "../components/text";
import LocationTestimoniSection from "../sections/Location/testimoni";

export default function LocationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="px-20">
        <div className="text-center mt-20 mb-10">
          <Subtitle text="Our Location" />
          <Title text={"ALOPE Taste House Restaurant"} />
        </div>

        <div id="map" className="border-4 border-[#bc8b57] scroll-m-44">
          <LocationMapSection />
        </div>

        <div id="testimonials" className="text-center mt-20 mb-10 scroll-m-20">
          <Subtitle text="Testimonials" />
          <Title text={"We’re In Our Customer’s Good Books"} />
        </div>
        <LocationTestimoniSection />
      </main>
    </>
  );
}
