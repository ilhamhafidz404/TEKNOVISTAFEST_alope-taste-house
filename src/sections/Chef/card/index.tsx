import MapIcon from "../../../components/icons/map";

export default function ChefCard({
  name,
  location,
  img,
  alt,
}: {
  name: string;
  location: string;
  img: string;
  alt: string;
}) {
  return (
    <div className="max-h-[350px] mb-24">
      <div className="overflow-hidden w-full h-full cursor-pointer">
        <img
          src={`/chefs/${img}`}
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
          alt={alt}
        />
      </div>
      <div className="bg-[#191f25] p-3 border-t-[5px] border-[#bc8b57]">
        <p className="text-gray-200 font-semibold text-xl">{name}</p>
        <p className="flex items-center gap-2 text-gray-400 mt-2">
          <MapIcon myClass="size-5" />
          {location}
        </p>
      </div>
    </div>
  );
}
