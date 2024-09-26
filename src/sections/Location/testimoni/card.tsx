export default function TestimoniCard() {
  return (
    <div className="h-[400px] bg-[#191f25] rounded-lg relative mb-7">
      <div className="py-20 px-10 ">
        <p className="text-[200px] -mt-20 text-[#bc8b57] font-serif">"</p>
        <p className="text-gray-300 -mt-32 w-3/4">
          My appetites were satisfied by your kale chips and crackers without
          making me compromise my diet. I was also quite happy to see that these
          things were being produced locally. I was happy to learn that my food
          was produced by a "neighbor" in Bridgeport, Pennsylvania because I
          live nearby.
        </p>
        <p className="text-3xl mt-5 text-gray-200 font-semibold">
          Ilham Hafidz
        </p>
      </div>
      <div className="absolute top-0 right-0 bottom-0">
        <img
          src="/restaurants/1.jpg"
          alt=""
          className="h-full"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>
    </div>
  );
}
