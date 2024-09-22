import { ReactNode } from "react";
import { ChevronRight } from "../icons/chevron";

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
    <div className="bg-white text-center shadow-md px-10 py-10 pb-20 rounded-xl relative overflow-hidden">
      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 w-[60px] h-[60px] rounded-full inline-flex justify-center items-center">
        {/* <img
          src={imgSrc}
          alt="discount icon"
          className={`mx-auto ${imgSize}`}
        /> */}
        {icon}
      </span>
      <h5 className="mt-5 font-bold text-xl">{title}</h5>
      <p className="text-sm mt-1 text-gray-700">{description}</p>
      <button className="hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white font-medium absolute left-0 right-0 bottom-0 py-3 flex items-center justify-center gap-2">
        View Detail
        <ChevronRight myClass="size-4" />
      </button>
    </div>
  );
}
