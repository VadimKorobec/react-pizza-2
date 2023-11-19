import { useEffect, useState } from "react";

import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaBlock } from "./components/PizzaBlock/PizzaBlock";
import { Skeleton } from "./components/PizzaBlock/Skeleton";
import { Sort } from "./components/Sort";

import "./scss/app.scss";

export const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://64f47f23932537f4051a6aa2.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_,idx) => <Skeleton key={idx} />)
                : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};
