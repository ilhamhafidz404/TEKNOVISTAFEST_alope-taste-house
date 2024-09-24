import { useState } from "react";

// global component
import { Subtitle, Title } from "../../../components/text";
import Button from "../../../components/button";

// component
import { ChefCard, ChefExperienceCard, ChefLocationCard } from "./card";

// data
import chefs from "../../../data/chefs.json";

export default function Chef() {
  const [activeChef, setActiveChef] = useState({
    name: "Arnold Poernomo",
    img: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: 10,
    at: "Jakarta Resto",
  });
  return (
    <section
      id="chef"
      className="grid md:grid-cols-2 lg:gap-20 gap-10 mt-20 items-center scroll-mt-20"
    >
      <div className="h-[800px] relative">
        <img
          src={activeChef.img}
          alt="Chef"
          className="rounded-md h-full w-full object-cover"
        />

        <ChefExperienceCard experience={activeChef.experience} />
        <ChefLocationCard location={activeChef.at} />
      </div>
      <div>
        <Subtitle text="TOP 4 EXPERT CHEF" />
        <Title text="Expert Chef with Fuddy" />
        <div className="mt-10">
          {chefs.map((chef, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                setActiveChef({
                  name: chef.name,
                  img: chef.photo,
                  experience: chef.experience,
                  at: chef.at,
                })
              }
            >
              <ChefCard chef={chef} active={activeChef.name} />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button text="View All Chef" />
        </div>
      </div>
    </section>
  );
}
