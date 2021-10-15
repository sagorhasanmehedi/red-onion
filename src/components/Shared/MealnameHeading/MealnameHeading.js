import React from "react";
import { useHistory } from "react-router";
import "./Mealnameheading.css";

const MealnameHeading = () => {
  const history = useHistory();
  const gohome = () => {
    history.push("/");
  };
  return (
    <div className="catagori">
      <h4 className="meal-name2">
        <button className="mealname-button2">Breakfast</button>
        <button className="mealname-button2">Lunch</button>
        <button className="mealname-button2">Diner</button>
        <button onClick={gohome} className="mealname-button2">
          Home
        </button>
      </h4>
    </div>
  );
};

export default MealnameHeading;
