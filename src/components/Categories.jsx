import { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li key={idx}
            onClick={() => onClickCategory(idx)}
            className={activeIndex === idx ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
