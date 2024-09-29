import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  return (
    <>
      <Header
        title={lang == "en" ? "Our Chefs" : "Koki Kami"}
        description={
          lang == "en"
            ? "Our chef is a culinary expert with a passion for creating memorable dining experiences. With years of experience in the kitchen, they combine traditional techniques with modern flavors to craft dishes that delight the senses."
            : "Koki kami adalah ahli kuliner dengan hasrat untuk menciptakan sesuatu yang berkesan pengalaman bersantap. Dengan pengalaman bertahun-tahun di dapur, mereka menggabungkan teknik tradisional dengan cita rasa modern untuk membuat hidangan yang menyenangkan indera."
        }
        img={["/header/chef1.png", "/header/chef2.png"]}
        currentImg="/header/chef1.png"
      />
      <div className="text-center mt-20">
        <Subtitle text={lang == "en" ? "Our Chef" : "Koki Kami"} />
        <Title
          text={
            lang == "en"
              ? "Professional Chef We Have"
              : "Koki Professional yang Kami Miliki"
          }
        />
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

      <ChefMotto lang={lang} />
    </>
  );
}
