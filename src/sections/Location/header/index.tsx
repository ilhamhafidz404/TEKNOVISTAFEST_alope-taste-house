import { useState, useEffect } from "react";
import { Subtitle } from "../../../components/text";

export default function Header() {
  const [currentImage, setCurrentImage] = useState("/header/chef1.png");

  const images = ["/header/chef1.png", "/header/chef2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="lg:flex justify-between items-center px-5 md:px-10 xl:px-20 bg-[url('/banner.png')] h-[800px] xl:h-[700px] bg-cover text-center md:text-left">
      <div className="lg:w-[700px] lg:pt-0 pt-44">
        <Subtitle text="lorem ipsum sit" />
        <h1 className="text-3xl md:text-5xl xl:text-7xl text-white font-bold">
          Our Restaurant
        </h1>
        <p className="text-gray-300 mt-10 text-xs md:text-sm xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam
          mollitia quam vero dolor eos. Nam ex at perferendis voluptatibus
          incidunt facilis pariatur dolor officiis eum rem, maxime voluptatum
          ad.
        </p>
      </div>
      <div className="xl:pr-28">
        {/* burger: https://www.pngwing.com/id/free-png-aqoob */}
        {/* pizza: https://www.pngwing.com/id/free-png-yykam */}
        <img
          src={currentImage}
          alt="Menu item"
          className="xl:w-[650px] lg:w-[500px] md:w-[400px] w-full h-full mx-auto xl:mt-0 mt-10"
          width={"auto"}
          height={"auto"}
        />
      </div>
    </div>
  );
}
