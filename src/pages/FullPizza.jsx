import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://64f47f23932537f4051a6aa2.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return "Loading ...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
          <p>{pizza.price}</p>
          <Link to={'/'} >Go Back</Link>
    </div>
  );
};
