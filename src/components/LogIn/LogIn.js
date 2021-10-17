import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./LogIn.css";
import img from "../../images/logo2.png";
import Header from "../Shared/Header/Header";
import UseAuth from "../../Hook/UseAuth";
import { FormControl, InputGroup } from "react-bootstrap";
import backgroundimg from "../../images/editebackground.jpg";

const Login = () => {
  const {
    googlesignin,
    facebooklogin,
    setuseremail,
    setuserpassword,
    signinwithpassword,
    setisLoding,
  } = UseAuth().firebase_methods;

  const history = useHistory();
  const location = useLocation();
  const redirect_URL = location.state?.from || "/";

  //  redirect login for email password
  const loginredirect = () => {
    signinwithpassword()
      .then((result) => {
        console.log("login redirect");
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const redirectlogin_Google = () => {
    googlesignin().then((result) => {
      setisLoding(false);
      history.push(redirect_URL);

      // setuser(result.user);
    });
  };

  const redirectlogin_Facebook = () => {
    facebooklogin().then((result) => {
      history.push(redirect_URL);
      console.log("from facebook");
      // setuser(result.user);
    });
  };

  // email set for login
  const getloginemail = (e) => {
    setuseremail(e.target.value);
  };

  // password set for login
  const getloginpassword = (e) => {
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
            <input
              onBlur={getloginemail}
              type="email"
              name=""
              id="email"
              placeholder="Email"
            />
            <input
              onBlur={getloginpassword}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />

            <input onClick={loginredirect} type="submit" value="Sign in" />
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
            <Link to="/signup" className="login-text-p">
              <h6>New User ?</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
