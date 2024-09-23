import { useState } from "react";

// global components
import { Subtitle, Title } from "../../components/text";
import Button from "../../components/button";

// components
import RestaurantCard from "./card";
import TopRestaurant from "./top";

// data
import restaurants from "./../../data/restaurants.json";
import cities from "./../../data/cities.json";

// icon
import MapIcon from "../../components/icons/map";

export default function Restaurant() {
  const [filterLocation, setFilterLocation] = useState("kuningan");

  return (
    <section className="mt-20">
      <TopRestaurant />
      <div className="flex items-center justify-between">
        <div>
          <Subtitle text="Restaurant Based By City" />
          <Title text="Restaurant Near You" />
        </div>
        <div>
          <label
            htmlFor="citiesSelection"
            className="flex items-center bg-gray-200 py-3 px-5 rounded-lg gap-2"
          >
            <MapIcon myClass="size-5 text-gray-700" />
            <select
              id="citiesSelection"
              className="bg-transparent"
              onChange={(e) => {
                setFilterLocation(e.target.value);
              }}
            >
              {cities.map((city) => (
                <option value={city.value}>{city.placeholder}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-5">
        {restaurants
          .filter(
            (restaurant) => restaurant.location.toLowerCase() === filterLocation
          )
          .map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              img={restaurant.img}
              location={restaurant.location}
              totalReview={restaurant.totalReview}
              star={restaurant.star}
              prices={restaurant.prices}
            />
          ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button text="View All Restaurant" />
      </div>
    </section>
  );
}
