import { useState, useEffect } from "react";
import { Subtitle } from "../../../components/text";

export default function Header() {
  const [currentImage, setCurrentImage] = useState("/header/burger.png");

  const images = ["/header/burger.png", "/header/pizza.png", "/header/bbq.png"];

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
        <Subtitle text="ALOPE Taste House" />
        <h1 className="text-3xl md:text-5xl xl:text-7xl text-white font-bold">
          Our Menu
        </h1>
        <p className="text-gray-300 mt-5 text-xs md:text-sm xl:text-base">
          Enjoy a variety of our best menu choices. From appetizers to desserts,
          we serve a variety of deliciousness made with fresh, quality
          ingredients. Each dish is prepared with love and expertise to provide
          a satisfying culinary experience.
        </p>
      </div>
      <div className="xl:pr-20">
        {/* burger: https://www.pngwing.com/id/free-png-aqoob */}
        {/* pizza: https://www.pngwing.com/id/free-png-yykam */}
        {/* bbq: https://www.pngwing.com/id/free-png-kycyz */}
        <img
          src={currentImage}
          alt="Menu item"
          className="xl:w-[550px] lg:w-[500px] md:w-[400px] w-full h-full mx-auto xl:mt-0 mt-10"
          width={"auto"}
          height={"auto"}
        />
      </div>
    </div>
  );
}
