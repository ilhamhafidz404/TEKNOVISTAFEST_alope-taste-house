import { ChevronRight } from "../../components/icons/chevron";
import StarIcon from "../../components/icons/star";
import { Restaurant } from "../../models/Resturant";
import formatToRupiah from "../../tools/formatRupiah";

export default function RestaurantCard(restaurant: Restaurant) {
  return (
    <div className="bg-[url(/slider/1.png)] h-[400px] rounded-lg w-full bg-cover relative">
      <div className="bg-white absolute bottom-5 left-5 right-5 p-5 rounded-md">
        <div className="flex gap-1 items-center">
          <StarIcon />
          <p className="text-yellow-400 font-semibold">{restaurant.star}</p>
          <small className="text-gray-600">
            ({restaurant.totalReview} Review)
          </small>
        </div>
        <h6 className="text-lg font-semibold">{restaurant.name}</h6>
        <p className="font-medium text-gray-700">
          {formatToRupiah(restaurant.prices.min)} -{" "}
          {formatToRupiah(restaurant.prices.max)}
        </p>
        <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-indigo-500 hover:bg-indigo-400 p-3 rounded-md">
          <ChevronRight myClass="size-4 text-white" />
        </button>
      </div>
    </div>
  );
}
