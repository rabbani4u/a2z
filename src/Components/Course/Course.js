import React from "react";
import "./Course.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Course = props => {
  const { image, name, rating, price, key } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="course-info">
        <h4 className="heading">
          <Link to={"/course/" + key}>{name}</Link>
        </h4>
        <p>{rating}</p>
        <p>
          Price: $<strong>{price}</strong>
        </p>
        {props.showAddtoCart && (
          <button
            className="add-to-card-btn"
            variant="warning"
            onClick={() => props.handleButton(props.course)}
          >
            <ShoppingCartIcon /> add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Course;
