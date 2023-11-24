import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
const categoryId = useSelector(state => state.filter.categoryId)
const dispatch = useDispatch()
 



  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [currentPage,setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  const {searchValue} = useContext(SearchContext)

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    fetch(
      `https://64f47f23932537f4051a6aa2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&${search}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue,currentPage]);

  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(idx) => dispatch(setCategoryId(idx))}
          />
          <Sort value={sortType} onChangeSort={(idx) => setSortType(idx)} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination onChangePage={number => setCurrentPage(number)}/>
      </div>
    </>
  );
};
