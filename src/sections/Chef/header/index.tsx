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
    <div className="flex justify-between items-center px-20 bg-[url('/banner.png')] h-[700px] bg-cover">
      <div className="w-[700px]">
        <Subtitle text="lorem ipsum sit" />
        <h1 className="text-7xl text-white font-bold">Our Chef</h1>
        <p className="text-gray-300 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam
          mollitia quam vero dolor eos. Nam ex at perferendis voluptatibus
          incidunt facilis pariatur dolor officiis eum rem, maxime voluptatum
          ad.
        </p>
      </div>
      <div className="pr-28">
        {/* burger: https://www.pngwing.com/id/free-png-aqoob */}
        {/* pizza: https://www.pngwing.com/id/free-png-yykam */}
        {/* bbq: https://www.pngwing.com/id/free-png-kycyz */}
        <img src={currentImage} alt="Menu item" className="w-[650px] h-full" />
      </div>
    </div>
  );
}
