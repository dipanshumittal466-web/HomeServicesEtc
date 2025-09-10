import React, { useEffect, useState } from "react";

// ✅ Import 11 icons (React import से ही काम करेगा, public path से नहीं)
import plumbingIcon from "../assets/icons/plumbing.png";
import electricalIcon from "../assets/icons/electrical.png";
import cleaningIcon from "../assets/icons/cleaning.png";
import gardeningIcon from "../assets/icons/gardening.png";
import securityIcon from "../assets/icons/security.png";
import paintingIcon from "../assets/icons/painting.png";
import flooringIcon from "../assets/icons/flooring.png";
import roofingIcon from "../assets/icons/roofing.png";
import hvacIcon from "../assets/icons/hvac.png";
import appliancesIcon from "../assets/icons/appliances.png";
import othersIcon from "../assets/icons/others.png";

// ✅ Map category name → icon
const iconMap = {
  Plumbing: plumbingIcon,
  Electrical: electricalIcon,
  Cleaning: cleaningIcon,
  Gardening: gardeningIcon,
  Security: securityIcon,
  Painting: paintingIcon,
  Flooring: flooringIcon,
  Roofing: roofingIcon,
  HVAC: hvacIcon,
  Appliances: appliancesIcon,
  Others: othersIcon,
};

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Service Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={iconMap[cat.name] || othersIcon} // ✅ icon assign
              alt={cat.name}
              className="h-12 w-12 mb-2"
            />
            <h2 className="font-semibold text-lg">{cat.name}</h2>
            <ul className="list-disc ml-5 text-sm mt-2 space-y-1 max-h-40 overflow-y-auto">
              {cat.subcategories?.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
