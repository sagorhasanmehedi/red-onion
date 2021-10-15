import React, { useReducer } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import img from "../../../images/logo2.png";
import "./Header.css";
import UseFirebase from "../../../Hook/UseFirebase";

const Header = () => {
  const { signout, user } = UseFirebase();
  const history = useHistory();
  const gosignup = () => {
    history.push("/signup");
  };
  return (
    <div>
      <Navbar>
        <div className="navbar-container">
          <div className="">
            <Navbar.Brand href="#home">
              <img className="navbar-logo" alt="" src={img} />
            </Navbar.Brand>
          </div>
          <div className="">
            <span className="user-uid">{user?.displayName}</span>
            <i class="fas fa-shopping-cart"></i>
            <Link to="/" className="nav-login">
              Home
            </Link>
            <Link onClick={signout} to="" className="nav-login">
              Log Out
            </Link>

            <button onClick={gosignup} className="nav-signupbutton">
              Sign up
            </button>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
