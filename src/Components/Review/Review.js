import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import courseData from "../../FakeData/courseData";
import ReviewItem from "../ReviewItem/ReviewItem";

function Review() {
  const [cart, setCart] = useState([]);

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
    <div>
      Cart Item: {cart.length}
      {cart.map(pd => (
        <ReviewItem course={pd}></ReviewItem>
      ))}
    </div>
  );
}

export default Review;
