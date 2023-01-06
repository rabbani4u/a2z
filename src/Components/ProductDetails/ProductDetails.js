import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../../FakeData/courseData";
import Course from "../Course/Course";

function ProductDetails() {
  const { coursekey } = useParams();
  const course = courseData.find(item => item.key === coursekey);

  return (
    <div>
      {coursekey}ProductDetails Coming Soon
      <Course showAddtoCart={false} course={course} />;
    </div>
  );
}

export default ProductDetails;
