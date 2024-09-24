// globals component
import { Subtitle, Title } from "../../../components/text";

// component
import BenefitCard from "./card";

// icons
import LikeIcon from "../../../components/icons/like";
import MegaphoneIcon from "../../../components/icons/megaphone";
import MoneyIcon from "../../../components/icons/money";
import ShieldIcon from "../../../components/icons/shield";

export default function Benefit() {
  return (
    <section id="benefit" className="mt-20 scroll-mt-20">
      <div className="text-center">
        <Subtitle text="SPECIAL BENEFITS FOR YOU" />
        <Title text="Why Sould You Choose Us?" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        <BenefitCard
          title="Extra Discounts"
          description="Get your special discount by using our reservation"
          icon={<MegaphoneIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="Come and Eat"
          description="Get your own table quickly & without waiting in line"
          icon={<LikeIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="No Extra Fee"
          description="Get tax free if you want to order food and make a reservation"
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="Guaranteed Cleanlines"
          description="We ensure the cleanliness of the place as well as the food"
          icon={<ShieldIcon myClass="size-8 text-white" />}
        />
      </div>
    </section>
  );
}
