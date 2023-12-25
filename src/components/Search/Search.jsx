import { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

import searchSvg from "../../assets/img/search.svg";
import closeSvg from "../../assets/img/close.svg";

import styles from "./Search.module.scss";

export const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);

  const inputRef = useRef();

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon__search} src={searchSvg} alt="search" />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.icon__close}
          src={closeSvg}
          alt="close"
        />
      )}
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search pizza..."
      />
    </div>
  );
};
