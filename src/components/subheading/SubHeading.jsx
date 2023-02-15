import React from "react";
import "./SubHeading.css";

const SubHeading = ({ title }) => {
  return (
    <>
      <div className="subHeading__title">
        <p>{title}</p>
      </div>
    </>
  );
};

export default SubHeading;
