import React from "react";
import "./Banner.css";
import img from "../../../images/editebackground.jpg";

const Baner = () => {
  return (
    <div
      className="banner-img"
      style={{
        backgroundImage: `url(${img})`,
        height: "70vh",
      }}
    >
      <div className="">
        <h1 className="cover-heading">Best food waiting for your belly</h1>
        <div className="input-parent">
          <input
            className="banner-input"
            type="text"
            name=""
            id=""
            placeholder="Search food items"
          />
        </div>
      </div>
    </div>
  );
};

export default Baner;
