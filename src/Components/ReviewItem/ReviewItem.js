import React from "react";
import "./RewiewItem.css";

function ReviewItem(props) {
  console.log(props);
  const { name, image, quantity, price, rating, key } = props.course;
  return (
    <div className="review-items">
      <div className="review_item_img">
        <img src={image} alt="" />
      </div>

      <div>
        <h3 className="heading">{name}</h3>
        <p>{rating}</p>
        <p>Quantity:{quantity}</p>
        <p>Price:${price}</p>
        <br />
        <button
          onClick={() => props.removeProduct(key)}
          className="add-to-card-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ReviewItem;
