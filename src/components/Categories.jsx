export const Categories = ({ value, onChangeCategory }) => {

  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spacy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onChangeCategory(idx)}
            className={value === idx ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
