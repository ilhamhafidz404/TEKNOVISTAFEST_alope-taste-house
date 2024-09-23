import { useState } from "react";

// global component
import { Subtitle, Title } from "../../components/text";
import Button from "../../components/button";

// component
import { ChefCard, ChefExperienceCard, ChefLocationCard } from "./card";

// data
import chefs from "./../../data/chefs.json";

export default function Chef() {
  const [activeChef, setActiveChef] = useState({
    name: "Arnold Poernomo",
    img: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: 10,
    at: "Jakarta Resto",
  });
  return (
    <section className="grid grid-cols-2 gap-20 mt-20 items-center">
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
              onMouseEnter={() =>
                setActiveChef({
                  name: chef.name,
                  img: chef.photo,
                  experience: chef.experience,
                  at: chef.at,
                })
              }
            >
              <ChefCard key={index} chef={chef} active={activeChef.name} />
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
