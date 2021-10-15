import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Usegithubapi from "../../Hook/UsegithubApi";
import MealnameHeading from "../Shared/MealnameHeading/MealnameHeading";
import mealdetail from "./Mealdetail.css";

const Mealdetain = () => {
  const { id } = useParams();
  const data = Usegithubapi();
  const result = data.filter((meal) => meal.id == id);
  // const { name, price, img } = result[0];

  const history = useHistory();
  const goorderdetails = () => {
    history.push(`/orderdetail/${id}`);
  };

  return (
    <div>
      <MealnameHeading />
      <div className="parent-contain">
        <div className="meal-detail ">
          <div className="card-parent">
            <div className="detail-heading">
              <h1>{result[0]?.name}</h1>
            </div>
            <div className="detail-detail">
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
            <div className="price">
              <h1>${result[0]?.price}</h1>
              <div className="plusminusbutton">
                <button>-</button> <h4>1</h4>
                <button>+</button>
              </div>
            </div>
            <button onClick={goorderdetails} className="card-button">
              <i class="detail-icon fas fa-shopping-cart"></i> Add
            </button>
          </div>
        </div>
        <div className="meal-img ">
          <img src={result[0]?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mealdetain;
