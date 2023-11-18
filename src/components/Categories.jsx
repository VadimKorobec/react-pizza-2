import { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Spacy",
    "Closed",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={activeIndex === idx ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
