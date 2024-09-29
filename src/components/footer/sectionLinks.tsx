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
      "/location": [
        {
          placeholder: "Header",
          sectionID: "#",
        },
        {
          placeholder: "Location Map",
          sectionID: "#map",
        },
        {
          placeholder: "Testimonals",
          sectionID: "#testimonials",
        },
      ],
      "/menu": [
        {
          placeholder: "Header",
          sectionID: "#",
        },
        {
          placeholder: "Pizza Menu",
          sectionID: "#pizza",
        },
        {
          placeholder: "Burger Menu",
          sectionID: "#burger",
        },
        {
          placeholder: "Sandwitch Menu",
          sectionID: "#sandwitch",
        },
      ],
      "/chef": [
        {
          placeholder: "Header",
          sectionID: "#",
        },
        {
          placeholder: "Chef",
          sectionID: "#chef",
        },
        {
          placeholder: "Motto",
          sectionID: "#motto",
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
