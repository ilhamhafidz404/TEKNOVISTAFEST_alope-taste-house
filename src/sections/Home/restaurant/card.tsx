import { ChevronRight } from "../../../components/icons/chevron";
import StarIcon from "../../../components/icons/star";
import { Restaurant } from "../../../models/Resturant";
import formatToRupiah from "../../../tools/formatRupiah";

export default function RestaurantCard(restaurant: Restaurant) {
  return (
    <>
      <span className="hidden bg-[url(/restaurants/1.jpg)]"></span>
      <span className="hidden bg-[url(/restaurants/2.jpg)]"></span>
      <span className="hidden bg-[url(/restaurants/3.jpg)]"></span>
      <span className="hidden bg-[url(/restaurants/4.jpg)]"></span>
      <span className="hidden bg-[url(/restaurants/5.jpg)]"></span>
      <span className="hidden bg-[url(/restaurants/6.jpg)]"></span>
      <div
        className={`bg-[url(/restaurants/${restaurant.img})] h-[400px] rounded-lg w-full bg-cover relative`}
      >
        <div className="bg-[#191f25] absolute bottom-5 left-5 right-5 p-5 rounded-md">
          <div className="flex gap-1 items-center">
            <StarIcon />
            <p className="text-yellow-400 font-semibold">{restaurant.star}</p>
            <small className="text-gray-400">
              ({restaurant.totalReview} Review)
            </small>
          </div>
          <h6 className="text-lg font-semibold text-gray-100">
            {restaurant.name}
          </h6>
          <p className="font-medium text-gray-300 mt-3">
            {formatToRupiah(restaurant.prices.min)} -{" "}
            {formatToRupiah(restaurant.prices.max)}
          </p>
          <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#bc8b57] hover:bg-[#bc8b57]/80 p-3 rounded-md">
            <ChevronRight myClass="size-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
