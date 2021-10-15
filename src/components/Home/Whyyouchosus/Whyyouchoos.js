import React from "react";
import "./Whyyouchoos.css";
import chef1 from "../../../images/Image/adult-blur-blurred-background-687824.png";
import chef2 from "../../../images/Image/architecture-building-city-2047397.png";
import bus from "../../../images/ICON/Group 204.png";
import bell from "../../../images/ICON/Group 1133.png";
import bus2 from "../../../images/ICON/Group 245.png";
import chef3 from "../../../images/Image/chef-cook-food-33614.png";

import { Link } from "react-router-dom";

const Whyyouchoos = () => {
  return (
    <div className=" chooseus-parent">
      <div className="chef-title">
        <h2>Why you choose us</h2>
        <h5>
          We have been in your shoes, have been successful, have learned <br />
          mistakes (ours and others), and have a passion for the industry.
        </h5>
      </div>

      <div className="row g-5">
        <div className="col-md-6 col-lg-4">
          <img className="card-imges" src={chef1} alt="" srcset="" />
          <div className="C-body">
            <div className="chef-heading">
              <img src={bus} alt="" srcset="" />
              <h4>Fast Delevery</h4>
            </div>
            <p>
              delivery company delivers food to a customer. An order <br /> is
              typically made either through a restaurant or grocer's <br />{" "}
              website or phone, or through a food ordering company. <br />
            </p>
            <Link className="see-more-link">
              see more <i class="fas fa-arrow-right chef-icon"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="card-imges" src={chef3} alt="" srcset="" />
          <div className="C-body">
            <div className="chef-heading">
              <img src={bell} alt="" srcset="" />
              <h4>A Good Auto Responder</h4>
            </div>
            <p>
              The deal: First responders, nurses, doctors, military personnel,
              <br />
              and anyone else who works in the healthcare field will get 50%{" "}
              <br />
              off their order as part of the chain's Essential Workers
            </p>
            <Link className="see-more-link">
              see more <i class="fas fa-arrow-right chef-icon"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="card-imges" src={chef2} alt="" srcset="" />
          <div className="C-body">
            <div className="chef-heading">
              <img src={bus2} alt="" srcset="" />
              <h4>Home Delivery</h4>
            </div>
            <p>
              Right now, in the midst of a pandemic, there are <br /> already
              plenty of reasons to thank first responders <br /> for the work
              they do. That's driven home .
            </p>
            <Link className="see-more-link">
              see more <i class="fas fa-arrow-right chef-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyyouchoos;
