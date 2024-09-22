import HeaderCard from "./card";

export default function Header() {
  return (
    <>
      <header
        className="overflow-scroll pl-20 mt-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-5 w-[calc(100vw*2-600px)]">
          <div className="relative pl-10" style={{ scrollSnapAlign: "center" }}>
            <HeaderCard
              position="left-0"
              textAlign="text-left"
              justifyContent="justify-start"
            />
            <img src="/slider/1.png" alt="" className="rounded-lg" />
          </div>
          <div className="relative pr-10" style={{ scrollSnapAlign: "center" }}>
            <HeaderCard
              position="right-0"
              textAlign="text-right"
              justifyContent="justify-end"
            />
            <img src="/slider/1.png" alt="" className="rounded-lg" />
          </div>
        </div>
      </header>
      <div className="flex items-center gap-3 justify-center mt-5">
        <span className="inline-block w-5 h-5 bg-red-500 rounded-full"></span>
        <span className="inline-block w-5 h-5 bg-red-500 rounded-full"></span>
        <span className="inline-block w-5 h-5 bg-red-500 rounded-full"></span>
      </div>
    </>
  );
}
