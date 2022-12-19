import React from "react";
import "./Course.css";
import { Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Course = props => {
  const { image, name, instructor, price } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="course-info">
        <h4 className="heading">{name}</h4>
        <p>{instructor}</p>
        <p>Price: {price}</p>
        <button
          className="add-to-card-btn"
          variant="warning"
          onClick={() => props.handleButton(props.course)}
        >
          <ShoppingCartIcon /> add to card
        </button>
      </div>
    </div>
  );
};

export default Course;
