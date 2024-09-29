import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// globals component
import { Subtitle, Title } from "../components/text/text";

//
import LocationMapSection from "../sections/Location/map/locationMap";
import LocationTestimoniSection from "../sections/Location/testimoni/testimoni";
import RestaurantCard from "../sections/Home/restaurant/homeRestaurantCard";

// icons
import MapPaperIcon from "../components/icons/mapPaper";
import GridIcon from "../components/icons/grid";

// data
import restaurants from "./../data/restaurants.json";
import Header from "../components/header/header";

export default function LocationView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [viewOn, setViewOn] = useState(2);

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <Header
        title={lang == "en" ? "Our Restaurants" : "Restoran Kami"}
        description={
          lang == "en"
            ? "Our place presents a unique blend of flavors from around the world. Our restaurant prides itself on serving delicious, high-quality food made from fresh ingredients."
            : "“Tempat kami menyajikan perpaduan rasa yang unik dari seluruh dunia. Restoran kami bangga menyajikan makanan lezat dan berkualitas tinggi terbuat dari bahan-bahan segar."
        }
        img={["/header/chef1.png", "/header/chef2.png"]}
        currentImg="/header/chef1.png"
      />
      <main className="xl:px-20 md:px-10 px-5">
        <div className="mt-20 mb-10 flex lg:flex-row flex-col lg:items-center md:items-start items-center lg:justify-between">
          <div className="md:text-left text-center">
            <Subtitle text={lang == "en" ? "Our Location" : "Lokasi Kami"} />
            <Title
              text={
                lang == "en"
                  ? "ALOPE Taste House Restaurant"
                  : "Restoran ALOPE Taste House"
              }
            />
          </div>
          <div className="mt-5 xl:mt-0 md:text-left text-center">
            <p className="text-gray-200 text-sm mb-1">
              {lang == "en" ? "View on" : "Lihat sebagai"}
            </p>
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
                {lang == "en" ? "Map" : "Peta"}
              </button>
              <button
                className={`px-3 py-2 rounded-r-md text-[#bc8b57] border-2 border-[#bc8b57] ${
                  viewOn == 2 && "bg-[#bc8b57] text-white"
                } text-sm inline-flex items-center gap-2 text-[#bc8b57]`}
                onClick={() => {
                  setViewOn(2);
                }}
              >
                {lang == "en" ? "Card" : "Kartu"}
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
          <Subtitle text={lang == "en" ? "Testimonials" : "Testimoni"} />
          <Title
            text={
              lang == "en"
                ? "We’re In Our Customer’s Good Books"
                : "Kami Berada dalam Review Bagus Pelanggan Kami"
            }
          />
        </div>
        <LocationTestimoniSection />
      </main>
    </>
  );
}
