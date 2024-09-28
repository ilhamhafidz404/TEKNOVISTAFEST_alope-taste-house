export default function ChefMotto() {
  return (
    <section
      id="motto"
      className="scroll-m-20 relative z-10 flex items-center justify-between h-[300px] -mb-20 mt-28 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10"
    >
      <div className="w-full md:w-1/2 pl-5 md:pl-10 xl:pl-20 pr-5 md:pr-0 md:text-left text-center">
        <p className="text-sm lg:text-base xl:text-xl text-gray-200 lg:uppercase">
          "I just wanted to let you know that I absolutely adore your food. In
          the past, I have given up healthy food to "reward" myself and satisfy
          my appetite, but now that I have discovered wonderful food products, I
          no longer crave unhealthy food."
        </p>
        <p className="lg:text-xl xl:text-2xl mt-3 font-bold text-[#bc8b57]">
          ~ ALOPE Taste House
        </p>
      </div>
      <div className="h-full overflow-hidden w-1/2 md:block hidden">
        {/* https://unsplash.com/photos/a-white-plate-topped-with-spaghetti-and-sauce-bM3duMiJuF8 */}
        <img
          src="/pasta.jpg"
          alt="pasta from unsplash"
          className="w-full h-full object-cover md:object-pastaMD xl:object-pastaXL"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          width={"auto"}
          height={"auto"}
        />
      </div>
    </section>
  );
}
