export default function MenuListItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <div className="flex gap-3 md:gap-10 items-start justify-between mb-6 md:mb-9">
      <div className="w-full">
        <div className="flex justify-start items-center gap-3 md:gap-5">
          <h6 className="text-gray-100 text-sm sm:text-base md:text-xl xl:text-2xl font-medium md:font-semibold whitespace-nowrap">
            {name}
          </h6>
          <span className="w-full h-[2px] xl:h-[3px] bg-[#bc8b57]"></span>
        </div>
        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm xl:text-base">
          {description}
        </p>
      </div>
      <div>
        <p className="text-sm sm:text-base md:text-2xl xl:text-3xl font-medium md:font-bold whitespace-nowrap text-gray-200">
          Rp {price}
        </p>
      </div>
    </div>
  );
}
