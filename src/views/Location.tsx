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

        <div className="border-4 border-[#bc8b57]">
          <LocationMapSection />
        </div>

        <div className="text-center mt-20 mb-10">
          <Subtitle text="Testimonials" />
          <Title text={"We’re In Our Customer’s Good Books"} />
        </div>
        <LocationTestimoniSection />
      </main>
    </>
  );
}
