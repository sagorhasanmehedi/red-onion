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
        <div className="input_parent">
          <div className="input_text">
            <h6>Search food Items</h6>
          </div>
          <button>Serch</button>
        </div>
      </div>
    </div>
  );
};

export default Baner;
