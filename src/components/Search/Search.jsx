import styles from "./Search.module.scss";
import searchSvg from "../../assets/img/search.svg";
import closeSvg from "../../assets/img/close.svg";

export const Search = ({ value, onSearch }) => {
    
  const handleChange = (e) => {
    e.preventDefault();
    onSearch(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon__search} src={searchSvg} alt="search" />
      {value && (
        <img
          onClick={() => onSearch("")}
          className={styles.icon__close}
          src={closeSvg}
          alt="close"
        />
      )}
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search pizza..."
      />
    </div>
  );
};
