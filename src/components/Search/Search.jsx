import { useContext } from "react";

import { SearchContext } from "../../App";

import styles from "./Search.module.scss";
import searchSvg from "../../assets/img/search.svg";
import closeSvg from "../../assets/img/close.svg";

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon__search} src={searchSvg} alt="search" />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.icon__close}
          src={closeSvg}
          alt="close"
        />
      )}
      <input
        value={searchValue}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search pizza..."
      />
    </div>
  );
};
