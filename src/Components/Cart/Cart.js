import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

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
      <button className="add-to-card-btn">Place Order</button>
    </div>
  );
};

export default Cart;
