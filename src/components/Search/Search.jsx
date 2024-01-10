import { useCallback, useRef, useState } from "react";

import debounce from "lodash.debounce";

import searchSvg from "../../assets/img/search.svg";
import closeSvg from "../../assets/img/close.svg";

import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

export const Search = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 250),
    []
  );

  const onClickClear = () => {
    dispatch(setSearchValue(''));
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
