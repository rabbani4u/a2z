import React from "react";

import "./Cart.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const Cart = props => {
  const cart = props.cart;
  console.log(cart);
  // const courseTotal = cart.reduce((sum, course) => sum + course.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    total = total + course.price * course.quantity;
  }
  const tax = Math.round(total * 0.1);
  const grandTotal = Math.round(total + tax);

  return (
    <div className="cart-container">
      <h4 className="order-details">Order Sumarry</h4>
      <h5 className="cart-item">
        <ShoppingBasketIcon />
        {cart.length}
      </h5>
      <p>Products Price: ${total}</p>
      <p>Tax: ${tax}</p>
      <h6 className="grand-total">Total Price: ${grandTotal}</h6>
      <Link to="/review">
        <button className="add-to-card-btn">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
