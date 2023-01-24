import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import courseData from "../../FakeData/courseData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

function Review() {
  const [cart, setCart] = useState([]);
  const removeProduct = coursekey => {
    const newCart = cart.filter(pd => pd.key !== coursekey);
    setCart(newCart);
    removeFromDatabaseCart(coursekey);
  };
  useEffect(() => {
    //cart info
    const saveCart = getDatabaseCart();
    const coursekeys = Object.keys(saveCart);
    const cartProducts = coursekeys.map(key => {
      const course = courseData.find(pd => pd.key === key);
      course.quantity = saveCart[key];
      return course;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="twin-container">
      <div className="course-container">
        {cart.map(pd => (
          <ReviewItem
            key={pd.key}
            course={pd}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Review;
