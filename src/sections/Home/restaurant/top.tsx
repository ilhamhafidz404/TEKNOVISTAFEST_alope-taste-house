import { useState } from "react";
import Button from "../../../components/button";
import { Subtitle, Title } from "../../../components/text";
import StarIcon from "../../../components/icons/star";
import { ChevronRight } from "../../../components/icons/chevron";

export default function TopRestaurant() {
  const [hoveredRestaurant, setHoveredRestaurant] = useState(1);

  return (
    <div className="hidden md:grid lg:grid-cols-3 mb-20 items-center">
      <div className="w-full">
        <Subtitle text="Top 3 Featured Restaurant" />
        <Title text="Most Popular Restaurants" />
        <p className="text-gray-300 text-sm mt-5 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quae
          tempore eaque maxime repellat. Laboriosam, non sit facilis, ut ipsum
          cum, quas illo repudiandae minima alias aspernatur delectus architecto
          consectetur.
        </p>
        <Button text="View All Restaurant" />
      </div>
      <div className="md:col-span-2 flex gap-2 justify-end lg:mt-0 mt-5">
        <div
          className={`${
            hoveredRestaurant == 1 ? "w-1/3 lg:w-[500px]" : "w-1/3 lg:w-[200px]"
          } hover:md:w-[300px] hover:lg:w-[500px] transition-all duration-500 h-[400px] rounded overflow-hidden relative`}
          onMouseEnter={() => setHoveredRestaurant(1)}
        >
          {/* https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA */}
          <img
            src="/restaurants/1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          {hoveredRestaurant == 1 && (
            <div className="bg-[#191f25] absolute bottom-5 left-5 right-5 p-5 rounded-md">
              <div className="flex gap-1 items-center">
                <StarIcon />
                <p className="text-yellow-400 font-semibold">5</p>
                <small className="text-gray-400">(10 Review)</small>
              </div>
              <h6 className="text-lg font-semibold text-gray-100">
                ALOPE Garden Bistro
              </h6>
              <p className="font-medium text-gray-300 mt-3">
                Rp 10.000 - Rp 20.000
              </p>
              <button className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#bc8b57]/80 p-3 rounded-md">
                <ChevronRight myClass="size-4 text-white" />
              </button>
            </div>
          )}
        </div>

        <div
          className={`${
            hoveredRestaurant == 2 ? "w-1/3 lg:w-[500px]" : "w-1/3 lg:w-[200px]"
          } hover:md:w-[300px] hover:lg:w-[500px] transition-all duration-500 h-[400px] rounded overflow-hidden relative`}
          onMouseEnter={() => setHoveredRestaurant(2)}
        >
          {/* https://unsplash.com/photos/two-person-sitting-on-bar-stool-chair-in-front-of-bar-front-desk-8x_fFNrmeDk */}
          <img
            src="/restaurants/2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          {hoveredRestaurant == 2 && (
            <div className="bg-[#191f25] absolute bottom-5 left-5 right-5 p-5 rounded-md">
              <div className="flex gap-1 items-center">
                <StarIcon />
                <p className="text-yellow-400 font-semibold">5</p>
                <small className="text-gray-400">(10 Review)</small>
              </div>
              <h6 className="text-lg font-semibold text-gray-100">
                ALOPE Fiesta
              </h6>
              <p className="font-medium text-gray-300 mt-3">
                Rp 10.000 - Rp 20.000
              </p>
              <button className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#bc8b57]/80 p-3 rounded-md">
                <ChevronRight myClass="size-4 text-white" />
              </button>
            </div>
          )}
        </div>

        <div
          className={`${
            hoveredRestaurant == 3 ? "w-1/3 lg:w-[500px]" : "w-1/3 lg:w-[200px]"
          } hover:md:w-[300px] hover:lg:w-[500px] transition-all duration-500 h-[400px] rounded overflow-hidden relative`}
          onMouseEnter={() => setHoveredRestaurant(3)}
        >
          {/* https://unsplash.com/photos/people-sitting-inside-cafe-klXhDG8Roj4 */}
          <img
            src="/restaurants/3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          {hoveredRestaurant == 3 && (
            <div className="bg-[#191f25] absolute bottom-5 left-5 right-5 p-5 rounded-md">
              <div className="flex gap-1 items-center">
                <StarIcon />
                <p className="text-yellow-400 font-semibold">5</p>
                <small className="text-gray-400">(10 Review)</small>
              </div>
              <h6 className="text-lg font-semibold text-gray-100">
                ALOPE Grill & Smokehouse Serpong
              </h6>
              <p className="font-medium text-gray-300 mt-3">
                Rp 10.000 - Rp 20.000
              </p>
              <button className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#bc8b57]/80 p-3 rounded-md">
                <ChevronRight myClass="size-4 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
