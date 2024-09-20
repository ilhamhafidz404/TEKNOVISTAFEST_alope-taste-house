export default function NavbarLinks() {
  const baseClass =
    "after:content-[''] after:bottom-0 after:h-[5px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:absolute after:rounded-full relative pb-2";

  const addedHoverClass =
    "hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2";

  const addedActiveClass = "after:left-0 after:right-0";

  return (
    <div>
      <ul className="flex gap-5 font-medium">
        <li>
          <a href="" className={`${baseClass} ${addedActiveClass}`}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={`${baseClass} ${addedHoverClass}`}>
            Category
          </a>
        </li>
        <li>
          <a href="" className={`${baseClass} ${addedHoverClass}`}>
            Service
          </a>
        </li>
        <li>
          <a href="" className={`${baseClass} ${addedHoverClass}`}>
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}
