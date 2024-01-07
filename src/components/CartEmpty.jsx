import { Link } from 'react-router-dom';
import Empty from '../assets/img/empty-cart.png'

export const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Your shopping bag is empty</h2>
        <p>
          Unfortunately, you didn't order any pizzas.
          <br />
          If you want to order a pizza, go to the main page of the website.
        </p>
        <img src={Empty} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Go Back</span>
        </Link>
      </div>
    </>
  );
};
