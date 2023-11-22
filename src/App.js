import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";

import "./scss/app.scss";

export const App = () => {
  const[searchValue,setSearchValue] = useState('')
  

  return (
    <div>
      <div className="wrapper">
        <Header value={searchValue} onSearch={setSearchValue}  />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
