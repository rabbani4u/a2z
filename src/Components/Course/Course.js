import React from "react";
import "./Course.css";

const Course = props => {
  const { image, name, instructor, price } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{instructor}</p>
        <p>Price: {price}</p>
        <button onClick={() => props.handleButton(props.course)}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Course;
