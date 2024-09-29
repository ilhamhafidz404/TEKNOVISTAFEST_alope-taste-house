import { Menu } from "../../../models/Menu";

export default function MenuCard({ menu }: { menu: Menu }) {
  return (
    <div className="xl:mx-5 mx-2 pb-10">
      <img
        src={menu.image}
        alt="img from unsplash"
        className="rounded-md h-[250px] w-full object-cover"
        width={"auto"}
        height={"auto"}
      />
      <p className="text-2xl font-semibold text-gray-100 mt-5">{menu.name}</p>
      <p className="text-gray-300 text-sm mt-3">{menu.description}</p>
    </div>
  );
}
