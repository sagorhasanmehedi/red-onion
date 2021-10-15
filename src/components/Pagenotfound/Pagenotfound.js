import React from "react";
import "./Pagenotfound.css";
import img from "../../images/notfound/2488755-ai.jpg";
import { useHistory } from "react-router";

const Pagenotfound = () => {
  const history = useHistory();
  const gohome = () => {
    console.log("ok");
    history.push("/");
  };
  return (
    <div className="not-found-page" style={{ backgroundImage: `url(${img})` }}>
      <div className="not-found-button">
        <button onClick={gohome}>Go Back</button>
      </div>
    </div>
  );
};

export default Pagenotfound;
