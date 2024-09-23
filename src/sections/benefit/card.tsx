import { ReactNode } from "react";
import { ChevronRight } from "../../components/icons/chevron";

export default function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-[#191f25] text-center shadow-md px-10 py-10 pb-20 rounded-xl relative overflow-hidden">
      <span className="bg-[#bc8b57]  w-[60px] h-[60px] rounded-full inline-flex justify-center items-center">
        {icon}
      </span>
      <h5 className="mt-5 font-bold text-xl text-gray-100">{title}</h5>
      <p className="text-sm mt-1 text-gray-300">{description}</p>
      <button className="text-gray-300 hover:bg-[#bc8b57]  hover:text-white font-medium absolute left-0 right-0 bottom-0 py-3 flex items-center justify-center gap-2">
        View Detail
        <ChevronRight myClass="size-4" />
      </button>
    </div>
  );
}
