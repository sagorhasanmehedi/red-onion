import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import Usegithubapi from "../../Hook/UsegithubApi";
import MealnameHeading from "../Shared/MealnameHeading/MealnameHeading";
import mealdetail from "./Mealdetail.css";
import UseAuth from "../../Hook/UseAuth";
import Usedata from "../../Hook/Usedata";
import Uselocalstroage from "../../Hook/UseLocalstroage";

const Mealdetain = () => {
  const [count, setcount] = useState(1);
  const { localstroagePLUS, localstroageMINUS } = Uselocalstroage();
  const { id } = useParams();
  const data = UseAuth().githubapi;

  // console.log(Usedata());

  const result = data.find((meal) => meal.id == id);
  const history = useHistory();
  const goorderdetails = () => {
    history.push(`/orderdetail/${id}`);
  };

  // plus minus button
  const plusbutton = () => {
    setcount(count + 1);
    localstroagePLUS(result.name);
  };

  const minusbutton = () => {
    if (count <= 1) {
      return;
    } else {
      localstroageMINUS(result.name);
      setcount(count - 1);
    }
  };

  return (
    <div>
      <MealnameHeading />
      <div className="parent-contain">
        <div className="meal-detail">
          <div className="card-parent">
            <div className="detail-heading">
              <h1>{result?.name}</h1>
            </div>
            <div className="detail-detail">
              <h6>{result?.preparetion}</h6>
            </div>
            <div className="price_button">
              <div className="price">
                <h1>${result?.price}</h1>
              </div>
              <div className="button_parent">
                <button onClick={minusbutton} className="minus">
                  -
                </button>
                <h3>{count}</h3>
                <button onClick={plusbutton} className="plus">
                  +
                </button>
              </div>
            </div>
            <button onClick={goorderdetails} className="card-button">
              <i class="detail-icon fas fa-shopping-cart"></i> Add
            </button>
          </div>
        </div>
        <div className="meal-img ">
          <img src={result?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mealdetain;
