import React from "react";

import "./Cart.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const Cart = props => {
  const cart = props.cart;
  const courseTotal = cart.reduce((sum, course) => sum + course.price, 0);
  const tax = courseTotal * 0.1;
  return (
    <div className="cart-container">
      <h4 className="order-details">Order Sumarry</h4>
      <h5 className="cart-item">
        <ShoppingBasketIcon />
        {cart.length}
      </h5>
      <p>Products Price: ${courseTotal}</p>
      <p>Tax: ${tax}</p>
      <h6 className="grand-total">Total Price: ${courseTotal + tax}</h6>
      <Link to="/review">
        <button className="add-to-card-btn">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
