import { useCallback, useContext, useRef } from "react";
import { SearchContext } from "../../App";
import debouunce from 'lodash.debounce'

import styles from "./Search.module.scss";
import searchSvg from "../../assets/img/search.svg";
import closeSvg from "../../assets/img/close.svg";

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef()
 

  const testDebounce = useCallback(
    debouunce(() => {
      console.log('HELLO')
    }, 1000),
    [],
  )

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
    testDebounce()
  };

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus()
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon__search} src={searchSvg} alt="search" />
      {searchValue && (
        <img
          onClick={onClickClear}
          className={styles.icon__close}
          src={closeSvg}
          alt="close"
        />
      )}
      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search pizza..."
      />
    </div>
  );
};
