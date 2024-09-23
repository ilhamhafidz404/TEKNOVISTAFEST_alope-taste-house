export default function FooterInstaPost() {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <p className="font-semibold mb-2 text-gray-100">Follow us on Instagram</p>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
            <span className="text-center inline-block">
              <img
                src="/logo/instagram.png"
                alt=""
                className="mx-auto w-[40px] object-cover"
              />
              <p className="-mt-1">See on Instagram</p>
            </span>
          </div>
          {/* https://unsplash.com/photos/selective-focus-photography-of-hamburger-with-sliced-tomatoes-and-vegetables-_TLKIVSW6Do */}
          <img
            src="/menu/burger.jpg"
            alt="burger from unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
            <span className="text-center inline-block">
              <img
                src="/logo/instagram.png"
                alt=""
                className="mx-auto w-[40px] h-full object-cover"
              />
              <p className="-mt-1">See on Instagram</p>
            </span>
          </div>
          {/* https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU */}
          <img
            src="/menu/pizza.jpg"
            alt="pizza from unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
            <span className="text-center inline-block">
              <img
                src="/logo/instagram.png"
                alt=""
                className="mx-auto w-[40px] object-cover"
              />
              <p className="-mt-1">See on Instagram</p>
            </span>
          </div>
          {/* https://unsplash.com/photos/burger-on-black-plate-beside-gray-stainless-steel-dining-fork-YuKwHTNVAiI */}
          <img
            src="/menu/hotdog.jpg"
            alt="hotdog from unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
            <span className="text-center inline-block">
              <img
                src="/logo/instagram.png"
                alt=""
                className="mx-auto w-[40px] object-cover"
              />
              <p className="-mt-1">See on Instagram</p>
            </span>
          </div>
          {/* https://unsplash.com/photos/a-person-is-cooking-food-on-a-grill-okLhhXJlFaA */}
          <img
            src="/menu/bbq.jpg"
            alt="BBQ from unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-md cursor-pointer overflow-hidden group after:content-[''] hover:after:bg-black/20 after:absolute after:inset-0 h-[100px]">
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs z-10">
            <span className="text-center inline-block">
              <img
                src="/logo/instagram.png"
                alt=""
                className="mx-auto w-[40px] object-cover"
              />
              <p className="-mt-1">See on Instagram</p>
            </span>
          </div>
          {/* https://unsplash.com/photos/close-up-photo-of-cooked-food-on-square-white-plate-auIbTAcSH6E */}
          <img
            src="/menu/beef.jpg"
            alt="beef from unsplash"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
