import { ChevronRight } from "../icons/chevron";

export default function Button({ text }: { text: string }) {
  return (
    <button className="py-3 px-7 rounded-md bg-[#bc8b57] hover:bg-[#bc8b57]/80 text-white text-sm flex items-center gap-2 justify-center">
      {text}
      <ChevronRight myClass="size-4" />
    </button>
  );
}
