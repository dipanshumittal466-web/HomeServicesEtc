import React, { useEffect, useState } from "react";

// 11 main category icons
import plumbingIcon from "../assets/icons/Plumbing.png";
import securityIcon from "../assets/icons/security-camera.png";
import repairIcon from "../assets/icons/repair.png";
import paintIcon from "../assets/icons/paint-roller.png";
import acIcon from "../assets/icons/air-conditioning.png";
import demolitionIcon from "../assets/icons/demolition-tool-transport-with-weight-ball.png";
import insectIcon from "../assets/icons/insecticide.png";
import manIcon from "../assets/icons/man.png";
import manAltIcon from "../assets/icons/man (1).png";
import freonIcon from "../assets/icons/freon.png";
import trimmingIcon from "../assets/icons/trimming.png";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // icon map
  const iconMap = {
    Plumbing: plumbingIcon,
    Security: securityIcon,
    Repair: repairIcon,
    Painting: paintIcon,
    HVAC: acIcon,
    Demolition: demolitionIcon,
    PestControl: insectIcon,
    Manpower: manIcon,
    Labor: manAltIcon,
    Electrical: freonIcon,
    Gardening: trimmingIcon,
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Service Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={iconMap[cat.name] || plumbingIcon}
              alt={cat.name}
              className="h-12 w-12 mb-2"
            />
            <h2 className="font-semibold">{cat.name}</h2>
            <ul className="list-disc ml-4 text-sm mt-2 space-y-1">
              {cat.subcategories.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
