import MoneyIcon from "../icons/money";
import BenefitCard from "./card";

export default function Benefit() {
  return (
    <section className="mt-20">
      <div className="text-center">
        <p className="font-medium text-indigo-500">SPECIAL BENEFITS FOR YOU</p>
        <h3 className="text-3xl font-semibold">Why Sould You Choose Us?</h3>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <BenefitCard
          title="Extra Discounts"
          description="Get your special discount by using our reservation"
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="Come and Eat"
          description="Get your own table quickly & without waiting in line"
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="No Extra Fee"
          description="Get tax free if you want to order food and make a reservation"
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
        <BenefitCard
          title="Guaranteed Cleanlines"
          description="We ensure the cleanliness of the place as well as the food"
          icon={<MoneyIcon myClass="size-8 text-white" />}
        />
      </div>
    </section>
  );
}
