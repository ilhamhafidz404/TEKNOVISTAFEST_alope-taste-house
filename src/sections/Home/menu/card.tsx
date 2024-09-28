import { Menu } from "../../../models/Menu";

export default function MenuCard({ menu }: { menu: Menu }) {
  return (
    <div className="xl:mx-5 mx-2 pb-10">
      <img
        src={menu.image}
        alt=""
        className="rounded-md h-[250px] w-full object-cover"
        width={"auto"}
        height={"auto"}
      />
      <h5 className="text-2xl font-semibold text-gray-100 mt-5">{menu.name}</h5>
      <p className="text-gray-300">{menu.description}</p>
    </div>
  );
}
