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
    const toBeAdded = course.key;
    const sameCourse = cart.find(pd => pd.key === toBeAdded);
    let count = 1;
    let newcart;
    if (sameCourse) {
      const count = sameCourse.quantity + 1;
      sameCourse.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAdded);
      newcart = [...others, sameCourse];
    } else {
      course.quantity = 1;
      newcart = [...cart, course];
    }

    setCart(newcart);

    addToDatabaseCart(course.key, count);
  }

  return (
    <div className="twin-container">
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
