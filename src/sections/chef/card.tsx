import { ChevronRight } from "../../components/icons/chevron";
import MapIcon from "../../components/icons/map";
import ShieldIcon from "../../components/icons/shield";
import {
  Chef,
  ChefExperienceCardProps,
  ChefLocationCardProps,
} from "../../models/Chef";

function ChefCard({ chef, active }: { chef: Chef; active: string }) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-md mb-3 ${
        active == chef.name && "bg-[#191f25] shadow"
      }`}
    >
      <div>
        <p className="text-gray-400 text-sm font-medium uppercase">
          {chef.specialist}
        </p>
        <h6 className="text-xl font-semibold mb-2 text-gray-100">
          {chef.name}
        </h6>
        <div className="flex items-center gap-2 text-gray-300">
          <MapIcon myClass="size-4 text-gray-700" />
          <p>{chef.location}</p>
        </div>
      </div>
      <div>
        <a
          href=""
          className="flex items-center gap-2 text-[#bc8b57] text-sm font-medium"
        >
          See Profile
          <ChevronRight myClass="size-4" />
        </a>
      </div>
    </div>
  );
}

function ChefExperienceCard({ experience }: ChefExperienceCardProps) {
  return (
    <div
      className={`bg-[#191f25] py-5 lg:py-7 px-7 lg:px-10 rounded-lg shadow text-center absolute top-0 md:-top-5 lg:top-20 right-0 md:-right-2 lg:-right-10`}
    >
      <div className="mx-auto w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#bc8b57] flex items-center justify-center">
        <ShieldIcon myClass="size-7 text-white" />
      </div>
      <p className="mt-3 font-bold lg:text-xl text-gray-100">
        {experience} Years
      </p>
      <p className="text-gray-300 text-sm">Experience</p>
    </div>
  );
}

function ChefLocationCard({ location }: ChefLocationCardProps) {
  return (
    <div
      className={`bg-[#191f25] p-3 rounded-lg gap-4 items-center shadow absolute flex bottom-0 lg:bottom-20 left-0 lg:-left-10`}
    >
      <div>
        <img
          src="/slider/1.png"
          alt=""
          className="w-[120px] lg:w-[150px] h-[100px] lg:h-[130px] object-cover rounded-md"
        />
      </div>
      <div className="mr-10">
        <small className="text-gray-300">Chef at Restaurant</small>
        <p className="text-xl font-semibold -mt-1 mb-5 text-gray-100">
          {location}
        </p>
        <a
          href=""
          className="text-[#bc8b57] text-sm font-medium inline-flex items-center gap-3"
        >
          View Detail
          <ChevronRight myClass="size-3" />
        </a>
      </div>
    </div>
  );
}

export { ChefCard, ChefExperienceCard, ChefLocationCard };
