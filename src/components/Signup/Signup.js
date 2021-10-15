import React from "react";
import "./Signup.css";
import img from "../../images/logo2.png";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import UseFirebase from "../../Hook/UseFirebase";
import UseAuth from "../../Hook/UseAuth";

const Signup = () => {
  const {
    facebooklogin,
    googlesignin,
    setuseremail,
    setuserpassword,
    createacount,
  } = UseFirebase();

  // get user email
  const getuseremail = (e) => {
    setuseremail(e.target.value);
  };
  // get user password
  const getuserpassword = (e) => {
    setuserpassword(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="login-form">
          <div className="login-logo">
            <img src={img} alt="" />
          </div>
          <div className="login-body">
            <input type="text" name="" id="" placeholder="Name" />
            <input
              onBlur={getuseremail}
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              onBlur={getuserpassword}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <input type="password" name="" id="" placeholder="Password" />
            <input onClick={createacount} type="submit" value="Sign Up" />
            <div className="google-facebookbutton">
              <button className="button-color1">Google</button>
              <button className="button-color2">Facebook</button>
            </div>
            <Link to="/login" className="login-text-p">
              <h6>Already have an account ?</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
