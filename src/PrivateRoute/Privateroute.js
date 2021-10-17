import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../Hook/UseAuth";

const Privateroute = ({ children, ...rest }) => {
  const { isLoding, user } = UseAuth().firebase_methods;

  if (isLoding) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spinner animation="grow" variant="danger" />;
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
