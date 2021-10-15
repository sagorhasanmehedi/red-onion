import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../Hook/UseAuth";
import UseFirebase from "../Hook/UseFirebase";

const Privateroute = ({ children, ...rest }) => {
  const { isLoding, user } = UseFirebase();

  // const { user } = UseAuth();
  // console.log(user);
  // console.log(isLoding);
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
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
