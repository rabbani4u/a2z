import React from "react";
import "./Course.css";
import { Button } from "react-bootstrap";

const Course = props => {
  const { image, name, instructor, price } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{instructor}</p>
        <p>Price: {price}</p>
        <Button
          variant="warning"
          onClick={() => props.handleButton(props.course)}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Course;
