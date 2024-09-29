import { useState } from "react";

// global component
import Button from "../../../components/button/button";
import { Subtitle, Title } from "../../../components/text/text";

// icons
import StarIcon from "../../../components/icons/star";
import { ChevronRight } from "../../../components/icons/chevron";

export default function TopRestaurant({ lang }: { lang: string }) {
  const [hoveredRestaurant, setHoveredRestaurant] = useState(1);

  return (
    <div className="hidden md:grid lg:grid-cols-3 mb-20 items-center gap-5">
      <div className="w-full">
        <Subtitle
          text={
            lang == "en"
              ? "Top 3 Featured Restaurant"
              : "3 Restoran Unggulan Teratas"
          }
        />
        <Title
          text={
            lang == "en"
              ? "Most Popular Restaurants"
              : "Restorant Paling Populer"
          }
        />
        <p className="text-gray-300 text-sm mt-5 mb-5">
          {lang == "en"
            ? "Experience the best culinary delights in three superior restaurants with dishes that are exceptional in taste and presentation, from authentic local to mouth-watering international cuisine, complete with a comfortable atmosphere and unforgettable service."
            : "Rasakan kuliner terbaik di tiga restoran unggulan dengan hidangan yang luar biasa dalam rasa dan penyajian, dari masakan lokal otentik hingga internasional yang menggugah selera, lengkap dengan suasana nyaman dan pelayanan yang tak terlupakan."}
        </p>
        <Button
          text={lang == "en" ? "View All Restaurant" : "Lihat Semua Restoran"}
          to="/location"
        />
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
            alt="img from unsplash"
            className="h-full w-full object-cover"
            width={"auto"}
            height={"auto"}
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
              <button
                title="See Restaurant"
                aria-label="See Restaurant"
                type="button"
                className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#edc599] p-3 rounded-md"
              >
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
            alt="img from unsplash"
            className="h-full w-full object-cover"
            width={"auto"}
            height={"auto"}
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
              <button
                title="See Restaurant"
                aria-label="See Restaurant"
                type="button"
                className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#edc599] p-3 rounded-md"
              >
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
            alt="img from unsplash"
            className="h-full w-full object-cover"
            width={"auto"}
            height={"auto"}
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
              <button
                title="See Restaurant"
                aria-label="See Restaurant"
                type="button"
                className="absolute right-5 top-1/2 lg:inline-block hidden -translate-y-1/2 bg-[#bc8b57] hover:bg-[#edc599] p-3 rounded-md"
              >
                <ChevronRight myClass="size-4 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
