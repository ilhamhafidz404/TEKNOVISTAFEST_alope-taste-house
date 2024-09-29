import { TestimoniProps } from "../../../models/GlobalProps";

export default function TestimoniCard(testimoni: TestimoniProps) {
  return (
    <div className="h-[400px] bg-[#191f25] rounded-lg relative mb-7">
      <div className="py-10 md:py-20 px-5 md:px-10 ">
        <p className="text-5xl md:text-9xl xl:text-[150px] md:-mt-10 xl:-mt-14 text-[#bc8b57] font-serif">
          "
        </p>
        <p className="text-gray-300 md:-mt-12 xl:-mt-20 md:w-3/4 text-sm md:text-sm xl:text-base">
          {testimoni.text}
        </p>
        <p className="text-xl xl:text-3xl mt-5 text-gray-200 font-semibold">
          {testimoni.name}
        </p>
      </div>
      <div className="absolute top-0 right-0 bottom-0 md:block hidden">
        <img
          src="/restaurants/1.jpg"
          alt="img from unsplash"
          className="h-full"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          width={"auto"}
          height={"auto"}
        />
      </div>
    </div>
  );
}
