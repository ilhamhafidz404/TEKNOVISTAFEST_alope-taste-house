import Button from "../../components/button";
import { Subtitle, Title } from "../../components/text";

export default function TopRestaurant() {
  return (
    <>
      <div className="grid grid-cols-3 mb-20">
        <div>
          <Subtitle text="Top 3 Featured Restaurant" />
          <Title text="Most Popular Restaurants" />
          <p className="text-gray-700 text-sm mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            quae tempore eaque maxime repellat. Laboriosam, non sit facilis, ut
            ipsum cum, quas illo repudiandae minima alias aspernatur delectus
            architecto consectetur.
          </p>
          <Button text="View All Restaurant" />
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}
