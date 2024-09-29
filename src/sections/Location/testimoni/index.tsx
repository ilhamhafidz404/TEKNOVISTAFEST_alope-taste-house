import GliderComponent from "react-glider";
import TestimoniCard from "./card";

// data
import testimonials from "./../../../data/testimonials.json";

export default function LocationTestimoniSection() {
  return (
    <GliderComponent draggable hasDots slidesToShow={1} slidesToScroll={1}>
      {testimonials.map((testimonial) => (
        <TestimoniCard name={testimonial.name} text={testimonial.text} />
      ))}
    </GliderComponent>
  );
}
