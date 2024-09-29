import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/chevron";

export default function Button({ text, to }: { text: string; to: string }) {
  return (
    <Link
      to={to}
      className="py-3 px-7 rounded-md bg-[#bc8b57] hover:bg-[#bc8b57]/80 text-white text-sm inline-flex items-center gap-2 justify-center"
    >
      {text}
      <ChevronRight myClass="size-4" />
    </Link>
  );
}
