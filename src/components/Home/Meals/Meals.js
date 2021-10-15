import React, { useState } from "react";
import Usedata from "../../../Hook/Usedata";
import Breakfast from "../Breakfast.js/Breakfast";
import "./Meal.css";

const Meals = () => {
  const { data } = Usedata();
  const [mealname, setmealname] = useState("breakfast");

  // for breakfast
  const breakfastbutton = () => {
    setmealname("breakfast");
  };

  // for lunch
  const lunchbutton = () => {
    setmealname("lunch");
  };

  // for diner
  const dinnerbutton = () => {
    setmealname("dinner");
  };

  const breakfast = data.filter((meal) => meal.category === mealname);

  return (
    <div className="all-meal-parent">
      <h4 className="meal-name">
        <button onClick={breakfastbutton} className="mealname-button">
          <span>Breakfast</span>
        </button>
        <button onClick={lunchbutton} className="mealname-button">
          Lunch
        </button>
        <button onClick={dinnerbutton} className="mealname-button">
          Diner
        </button>
      </h4>
      <div className="row">
        {breakfast.map((meal) => (
          <Breakfast meal={meal} key={meal.id} />
        ))}
      </div>
      <div className="chackout-button">
        <button>Checkout Your Food</button>
      </div>
    </div>
  );
};

export default Meals;
