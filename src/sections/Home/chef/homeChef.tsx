import { useState } from "react";

// global component
import { Subtitle, Title } from "../../../components/text/text";
import Button from "../../../components/button/button";

// component
import { ChefCard, ChefExperienceCard, ChefLocationCard } from "./homeChefCard";

// data
import chefs from "../../../data/chefs.json";

export default function Chef({ lang }: { lang: string }) {
  const [activeChef, setActiveChef] = useState({
    name: "Andi Pratama",
    img: "andi.jpg",
    experience: 10,
    at: "ALOPE Garden Bistro",
    atImg: "1.jpg",
  });
  return (
    <section
      id="chef"
      className="grid md:grid-cols-2 lg:gap-20 gap-10 mt-20 items-center scroll-mt-20"
    >
      <div className="h-[800px] relative">
        {/* img from unsplash */}
        <img
          src={`/chefs/${activeChef.img}`}
          alt="Chef img from unsplash"
          className="rounded-md h-full w-full object-cover"
          width={"auto"}
          height={"auto"}
        />

        <ChefExperienceCard experience={activeChef.experience} />
        <ChefLocationCard location={activeChef.at} img={activeChef.atImg} />
      </div>
      <div>
        <Subtitle text={lang == "en" ? "TOP 4 EXPERT CHEF" : "4 Koki Handal"} />
        <Title
          text={lang == "en" ? "Expert Chef with Us" : "Koki-koki Handal Kami"}
        />
        <div className="mt-10">
          {chefs.slice(0, 4).map((chef, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                setActiveChef({
                  name: chef.name,
                  img: chef.photo,
                  experience: chef.experience,
                  at: chef.at,
                  atImg: chef.atImg,
                })
              }
            >
              <ChefCard chef={chef} active={activeChef.name} lang={lang} />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button
            text={lang == "en" ? "View All Chef" : "Lihat Semua Koki"}
            to={"/chef"}
          />
        </div>
      </div>
    </section>
  );
}
