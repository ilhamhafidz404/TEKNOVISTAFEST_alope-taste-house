import { useLocation } from "react-router-dom";

export default function FooterSections() {
  const location = useLocation(); // Mengambil URL aktif
  const currentPath = location.pathname; // Menyimpan path dari URL aktif

  const sections: Record<string, { placeholder: string; sectionID: string }[]> =
    {
      "/": [
        {
          placeholder: "Header",
          sectionID: "#",
        },
        {
          placeholder: "Benefits",
          sectionID: "#benefit",
        },
        {
          placeholder: "Restaurants",
          sectionID: "#restaurant",
        },
        {
          placeholder: "Menu",
          sectionID: "#menu",
        },
        {
          placeholder: "Chefs",
          sectionID: "#chef",
        },
      ],
      "/menu": [
        {
          placeholder: "Header",
          sectionID: "#",
        },
        {
          placeholder: "Breakfast Menu",
          sectionID: "#breakfast",
        },
        {
          placeholder: "Lunch Menu",
          sectionID: "#lunch",
        },
        {
          placeholder: "Dinner Menu",
          sectionID: "#dinner",
        },
      ],
    };

  const currentSection = sections[currentPath];

  if (!currentSection) return null;

  return (
    <div>
      <p className="font-semibold mb-2 text-gray-100">Section</p>
      <ul>
        {currentSection.map((link, index) => (
          <li key={index} className="mb-1">
            <a
              href={link.sectionID}
              className="text-gray-300 hover:text-[#bc8b57]"
            >
              {link.placeholder}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
