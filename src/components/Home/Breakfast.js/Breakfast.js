import React from "react";
import { useHistory } from "react-router";
import Uselocalstroage from "../../../Hook/UseLocalstroage";
import "./Breakfast.css";

const Breakfast = (props) => {
  const { setlocalstroage } = Uselocalstroage();

  const { name, img, des, price, id } = props.meal;
  const history = useHistory();

  const godetails = (id) => {
    setlocalstroage(name);
    history.push(`/mealdetail/${id}`);
  };
  return (
    <div onClick={() => godetails(id)} className="meal-card col-lg-4">
      <div className="main-card">
        <img src={img} alt="" />
        <h5>{name}</h5>
        <p>{des}</p>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Breakfast;
