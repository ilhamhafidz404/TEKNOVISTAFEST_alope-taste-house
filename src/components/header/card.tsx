import StarIcon from "../icons/star";

export default function HeaderCard({
  position,
  textAlign,
  justifyContent,
}: {
  position: string;
  textAlign: string;
  justifyContent: string;
}) {
  return (
    <div
      className={`${position} ${textAlign} bg-white absolute top-1/2 -translate-y-1/2 py-6 px-8 rounded-xl shadow w-[400px]`}
    >
      <div className={`${justifyContent} flex items-center gap-2`}>
        <div className="flex items-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-yellow-400 font-semibold">5.0</p>
          <p className="text-xs text-gray-500">(54 review)</p>
        </div>
      </div>
      <h4 className="text-xl font-bold mb-1">Resto Bandung</h4>
      <p className="text-sm mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        nesciunt ut, culpa consequatur
      </p>
      <p className="text-gray-600 font-medium">Rp 100.000 - Rp 500.000</p>
      <p
        className={`${justifyContent} text-gray-600 flex gap-1 items-center mb-5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
          />
        </svg>
        Padang, Indonesia
      </p>

      <div className={`flex ${justifyContent}`}>
        <button
          className={`w-full px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:to-indigo-500 hover:from-purple-500 text-white flex items-center justify-between gap-2`}
        >
          Reservasi
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-3"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p
        className={`${justifyContent} flex gap-1 text-gray-600 text-xs items-center mt-3`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
        No extra cost
      </p>
    </div>
  );
}
