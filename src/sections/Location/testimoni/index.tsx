import GliderComponent from "react-glider";
import TestimoniCard from "./card";

export default function LocationTestimoniSection() {
  return (
    <GliderComponent draggable hasDots slidesToShow={1} slidesToScroll={1}>
      <TestimoniCard />
      <TestimoniCard />
      <TestimoniCard />
    </GliderComponent>
  );
}
