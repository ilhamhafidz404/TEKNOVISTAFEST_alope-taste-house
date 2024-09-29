import { useEffect } from "react";

// global components
import { Subtitle, Title } from "../components/text/text";
import Header from "../components/header/header";

// sections
import ChefCard from "../sections/Chef/card/chefCard";
import ChefMotto from "../sections/Chef/motto/chefMotto";

// data
import chefs from "../data/chefs.json";

export default function ChefView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        title="Our Chefs"
        description="Our chef is a culinary expert with a passion for creating memorable
          dining experiences. With years of experience in the kitchen, they
          combine traditional techniques with modern flavors to craft dishes
          that delight the senses."
        img={["/header/chef1.png", "/header/chef2.png"]}
        currentImg="/header/chef1.png"
      />
      <div className="text-center mt-20">
        <Subtitle text="Our Menu" />
        <Title text={"Professional Chef"} />
      </div>
      <div
        id="chef"
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 md:px-10 xl:px-20 gap-5 mt-10 scroll-m-44"
      >
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
