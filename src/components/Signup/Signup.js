import React from "react";
import "./Signup.css";
import img from "../../images/logo2.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import UseFirebase from "../../Hook/UseFirebase";
import backgroundimg from "../../images/editebackground.jpg";
import img2 from "../../images/bannerbackground.png";

const Signup = () => {
  const {
    facebooklogin,
    googlesignin,
    setuseremail,
    setuserpassword,
    createacount,
  } = UseFirebase();

  const history = useHistory();
  const location = useLocation();
  const redirect_URL = location.state?.from.pathname || "/";

  const redirectlogin_Google = () => {
    googlesignin().then((result) => {
      history.push(redirect_URL);

      // setuser(result.user);
    });
  };

  const redirectlogin_Facebook = () => {
    facebooklogin().then((result) => {
      console.log(result.user);
      history.push(redirect_URL);
      console.log("from facebook");
      // setuser(result.user);
    });
  };

  const rediretfuncation = () => {
    createacount()
      .then((result) => {
        console.log(result.user);
        console.log("user acount create");
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // get user email
  const getuseremail = (e) => {
    setuseremail(e.target.value);
  };
  // get user password
  const getuserpassword = (e) => {
    setuserpassword(e.target.value);
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundimg})` }}
      className="signup_parent"
    >
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
            <input onClick={rediretfuncation} type="submit" value="Sign Up" />
            <div className="google-facebookbutton">
              <button onClick={redirectlogin_Google} className="button-color1">
                Google
              </button>
              <button
                onClick={redirectlogin_Facebook}
                className="button-color2"
              >
                Facebook
              </button>
            </div>
            <Link to="/login" className="login-text-p">
              <h6>Already have an account ?</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
