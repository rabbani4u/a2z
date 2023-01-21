import React, { useState } from "react";
import Course from "../Course/Course";
import courseData from "../../FakeData/courseData";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const [courses, setCourses] = useState(courseData);
  const [cart, setCart] = useState([]);

  function handleButton(course) {
    const newcart = [...cart, course];
    setCart(newcart);
    const sameProduct = newcart.filter(pd => pd.key === course.key);
    const count = sameProduct.length;
    addToDatabaseCart(course.key, count);
  }

  return (
    <div className="shop-container">
      <div className="course-container">
        {courses.map(course => (
          <Course
            key={course.key}
            showAddtoCart={true}
            course={course}
            handleButton={handleButton}
          />
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
