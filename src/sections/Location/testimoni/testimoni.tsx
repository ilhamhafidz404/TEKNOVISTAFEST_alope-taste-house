import GliderComponent from "react-glider";
import TestimoniCard from "./testimoniCard";

// data
import testimonials from "../../../data/testimonials.json";

export default function LocationTestimoniSection() {
  return (
    <GliderComponent draggable hasDots slidesToShow={1} slidesToScroll={1}>
      {testimonials.map((testimonial, index) => (
        <TestimoniCard
          key={index}
          name={testimonial.name}
          text={testimonial.text}
        />
      ))}
    </GliderComponent>
  );
}
