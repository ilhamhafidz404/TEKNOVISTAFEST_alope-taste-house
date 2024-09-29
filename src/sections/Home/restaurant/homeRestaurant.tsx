import { useState } from "react";

// global components
import { Subtitle, Title } from "../../../components/text/text";
import Button from "../../../components/button/button";

// components
import RestaurantCard from "./homeRestaurantCard";
import TopRestaurant from "./homeTopRestaurant";

// data
import restaurants from "../../../data/restaurants.json";
import cities from "../../../data/cities.json";

// icon
import MapIcon from "../../../components/icons/map";

export default function Restaurant({ lang }: { lang: string }) {
  const [filterLocation, setFilterLocation] = useState("kuningan");

  return (
    <section id="restaurant" className="mt-20 scroll-mt-20">
      <TopRestaurant lang={lang} />
      <div className="md:flex items-center justify-between">
        <div>
          <Subtitle
            text={
              lang == "en" ? "Restaurant Based By City" : "Restoran di Kota"
            }
          />
          <Title
            text={
              lang == "en"
                ? "Restaurant Near You"
                : "Restoran di Dekat Tempatmu"
            }
          />
        </div>
        <div className="lg:mt-0 mt-5">
          <label
            htmlFor="citiesSelection"
            className="flex items-center bg-[#191f25] py-3 px-5 rounded-lg gap-2"
          >
            <MapIcon myClass="size-5 text-gray-400" />
            <select
              id="citiesSelection"
              className="bg-transparent text-gray-100"
              onChange={(e) => {
                setFilterLocation(e.target.value);
              }}
            >
              {cities.map((city, index) => (
                <option key={index} className="bg-[#191f25]" value={city.value}>
                  {city.placeholder}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 mt-5">
        {restaurants
          .filter(
            (restaurant) => restaurant.location.toLowerCase() === filterLocation
          )
          .map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button text="View All Restaurant" to="/location" />
      </div>
    </section>
  );
}
