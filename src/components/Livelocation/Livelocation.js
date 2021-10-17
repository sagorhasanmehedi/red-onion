import React from "react";
import { useHistory } from "react-router";
import img from "../../images/notfound/25516.jpg";
import "./Livelocation.css";

const Livelocation = () => {
  const history = useHistory();
  const gohome = () => {
    console.log("ok");
    history.push("/");
  };

  return (
    <div
      className="live-location"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="livelocation-button">
        <button onClick={gohome}>Go Back</button>
      </div>
    </div>
  );
};

export default Livelocation;
