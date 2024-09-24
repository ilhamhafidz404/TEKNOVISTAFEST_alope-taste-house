import { NavLink } from "react-router-dom";

export default function NavbarSearchList({
  name,
  img,
  description,
}: {
  name: string;
  img: string;
  description: string;
}) {
  return (
    <NavLink
      to={"/"}
      className="flex gap-4 items-center hover:bg-[#232a31] p-3"
    >
      <div className="w-1/2">
        <img
          src={img}
          alt=""
          className="rounded h-[80px] w-full object-cover"
        />
      </div>
      <div className="w-1/2">
        <h5 className="font-semibold">{name}</h5>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </NavLink>
  );
}
