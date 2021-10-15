import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import MealnameHeading from "../Shared/MealnameHeading/MealnameHeading";
import "./Orderdetail.css";
import img from "../../images/lunch/lunch3.png";
import img2 from "../../images/lunch/lunch2.png";
import Usegithubapi from "../../Hook/UsegithubApi";

const Orderdetail = () => {
  const { id } = useParams();
  const data = Usegithubapi();

  const result = data.filter((M) => M.id == id);
  //   console.log(result);

  const price = result[0]?.price;
  const tax = (price / 100) * 30;
  const deliveryfee = 2;
  const total = price + tax + deliveryfee;

  const history = useHistory();
  const golivelocation = () => {
    history.push("/livelocation");
  };

  return (
    <div>
      <MealnameHeading />
      <div className="details-parent">
        <div className="delivery-details">
          <h3>Edit Delivery Details</h3>
          <hr />
          <div className="order-detailparent">
            <input
              className="order-input-highlight"
              type="text"
              placeholder="Delivery to door"
            />

            <input
              className="order-input-highlight"
              type="text"
              placeholder="107 Rd No 8"
            />
            <input
              className="order-input"
              type="text"
              placeholder="Flat , suite or floor"
            />
            <input
              className="order-input"
              type="text"
              placeholder="Bisness Name"
            />
            <input
              className="order-input-instrustor"
              type="Text"
              placeholder="Add delivery instrustor"
            />
            <input
              onClick={golivelocation}
              className="order-input-button"
              type=""
              value="Save & Continue"
            />
          </div>
        </div>
        <div className="cart-parent">
          <div className="carT">
            <div className="cart-text">
              <h5>
                From <span>Gulshan Plaza Restaura GPR</span>
                <br /> Arriving in 20-30 min
              </h5>
              <h6>107 Rd No 8</h6>
            </div>

            <div className="meal-details-cart">
              <div className="cart-meal-img">
                <img src={result[0]?.img} alt="" />
              </div>
              <div className="name-price">
                <p>{result[0]?.name}</p>
                <h5>${result[0]?.price}</h5>
                <small>Delivery free</small>
              </div>
            </div>
            <div className="cart-total">
              <div className="item">
                <h6>Subtotal.1 item</h6>
                <h6>Tax</h6>
                <h6>Delivery fee</h6>
                <h5>Total</h5>
              </div>
              <div className="price">
                <h6>${price}</h6>
                <h6>${tax.toFixed(2)}</h6>
                <h6>${deliveryfee}</h6>
                <h5>${total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetail;

// <div className="meal-details-cart">
//               <div className="cart-meal-img">
//                 <img src={img} alt="" />
//               </div>
//               <div className="name-price">
//                 <p>Butter Naan</p>
//                 <h5>$40</h5>
//                 <small>Delivery free</small>
//               </div>
//             </div>
