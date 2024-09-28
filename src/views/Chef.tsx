import { useEffect } from "react";

// global components
import { Subtitle, Title } from "../components/text";

// sections
import Header from "../sections/Chef/header";
import ChefCard from "../sections/Chef/card";
import ChefMotto from "../sections/Chef/motto";

// data
import chefs from "../data/chefs.json";

export default function ChefView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="text-center mt-20">
        <Subtitle text="Our Menu" />
        <Title text={"Professional Chef"} />
      </div>
      <div id="chef" className="grid grid-cols-4 px-20 gap-5 mt-10 scroll-m-44">
        {chefs.map((chef, index) => (
          <ChefCard
            key={index}
            name={chef.name}
            location={chef.location}
            img={chef.photo}
            alt={chef.atImg}
          />
        ))}
      </div>

      <br />
      <br />
      <br />

      <ChefMotto />
    </>
  );
}
