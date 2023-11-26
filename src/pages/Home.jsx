import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCategoryId } from "../redux/slices/filterSlice";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (idx) => {
    console.log(idx);
    dispatch(setCategoryId(idx));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    axios
      .get(
        `https://64f47f23932537f4051a6aa2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&${search}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
