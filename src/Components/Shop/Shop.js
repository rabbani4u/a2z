import React, { useState } from "react";
import Course from "../Course/Course";
import courseData from "../../FakeData/courseData";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [courses, setCourses] = useState(courseData);
  const [cart, setCart] = useState([]);

  function handleButton(course) {
    const newcart = [...cart, course];
    setCart(newcart);
  }

  return (
    <div className="shop-container">
      <div className="course-container">
        {courses.map(course => (
          <Course
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
