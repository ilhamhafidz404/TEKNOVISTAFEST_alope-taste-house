import { useEffect } from "react";
import { Subtitle, Title } from "../components/text/text";
import Benefit from "../sections/Home/benefit/homeBenefit";
import LocationTestimoniSection from "../sections/Location/testimoni/testimoni";
import HeaderReservationSection from "../sections/Reservation/header/reservationHeader";

export default function ReservationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderReservationSection />

      <main className="px-5 md:px-10 xl:px-20 mt-96 md:mt-48">
        <Benefit />

        <div id="testimonials" className="text-center mt-20 mb-10 scroll-m-20">
          <Subtitle text="Testimonials" />
          <Title text={"We’re In Our Customer’s Good Books"} />
        </div>
        <LocationTestimoniSection />
      </main>
    </>
  );
}
