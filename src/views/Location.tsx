import { useEffect, useState } from "react";
import LocationMapSection from "../sections/Location/map/locationMap";
import { Subtitle, Title } from "../components/text/text";
import LocationTestimoniSection from "../sections/Location/testimoni/testimoni";
import MapPaperIcon from "../components/icons/mapPaper";
import GridIcon from "../components/icons/grid";
import RestaurantCard from "../sections/Home/restaurant/homeRestaurantCard";

// data
import restaurants from "./../data/restaurants.json";
import Header from "../components/header/header";

export default function LocationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [viewOn, setViewOn] = useState(2);

  return (
    <>
      <Header
        title="Our Restaurants"
        description="Our place presents a unique blend of flavors from around the world.
          Our restaurant prides itself on serving delicious, high-quality food
          made from fresh ingredients."
        img={["/header/chef1.png", "/header/chef2.png"]}
        currentImg="/header/chef1.png"
      />
      <main className="xl:px-20 md:px-10 px-5">
        <div className="mt-20 mb-10 flex lg:flex-row flex-col lg:items-center md:items-start items-center lg:justify-between">
          <div className="md:text-left text-center">
            <Subtitle text="Our Location" />
            <Title text={"ALOPE Taste House Restaurant"} />
          </div>
          <div className="mt-5 xl:mt-0 md:text-left text-center">
            <p className="text-gray-200 text-sm mb-1">View on</p>
            <div className="flex gap-">
              <button
                className={`px-3 py-2 rounded-l-md text-[#bc8b57] border-2 border-[#bc8b57] ${
                  viewOn == 1 && "bg-[#bc8b57] text-white"
                } text-sm inline-flex items-center gap-2 text-[#bc8b57]`}
                onClick={() => {
                  setViewOn(1);
                }}
              >
                <MapPaperIcon myClass="size-4" />
                Map
              </button>
              <button
                className={`px-3 py-2 rounded-r-md text-[#bc8b57] border-2 border-[#bc8b57] ${
                  viewOn == 2 && "bg-[#bc8b57] text-white"
                } text-sm inline-flex items-center gap-2 text-[#bc8b57]`}
                onClick={() => {
                  setViewOn(2);
                }}
              >
                Card
                <GridIcon myClass="size-4" />
              </button>
            </div>
          </div>
        </div>

        {viewOn == 1 ? (
          <div id="map" className="border-4 border-[#bc8b57] scroll-m-44">
            <LocationMapSection />
          </div>
        ) : (
          <div
            id="map"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mt-20 scroll-m-44"
          >
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        )}

        <div id="testimonials" className="text-center mt-20 mb-10 scroll-m-20">
          <Subtitle text="Testimonials" />
          <Title text={"We’re In Our Customer’s Good Books"} />
        </div>
        <LocationTestimoniSection />
      </main>
    </>
  );
}
