import React from "react";

const Cart = props => {
  const cart = props.cart;
  const courseTotal = cart.reduce((sum, course) => sum + course.price, 0);
  const tax = courseTotal * 0.1;
  return (
    <div>
      <h2>Order Sumarry</h2>
      <h3>Total Item Order: {cart.length}</h3>
      <p>Products Price: {courseTotal}</p>
      <p>Tax: {tax}</p>
      <p>Total Price: {courseTotal + tax}</p>
      <button>Place Order</button>
    </div>
  );
};

export default Cart;
