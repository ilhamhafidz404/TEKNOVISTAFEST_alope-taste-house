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
    <div className="flex gap-10 items-start justify-between mb-9">
      <div className="w-full">
        <div className="flex justify-start items-center gap-5">
          <h6 className="text-gray-100 text-2xl font-semibold whitespace-nowrap">
            {name}
          </h6>
          <span className="w-full h-[3px] bg-[#bc8b57]"></span>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      <div>
        <p className="text-3xl font-bold whitespace-nowrap text-gray-200">
          Rp {price}
        </p>
      </div>
    </div>
  );
}
