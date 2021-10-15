import React, { createContext } from "react";
import Usedata from "../../Hook/Usedata";
import UseFirebase from "../../Hook/UseFirebase";

export const Mycontext = createContext();

const AuthProvider = ({ children }) => {
  // console.log(facebooklogin, googlesignin, isLoding, signout, user, data);
  // (UseFirebase(), Usedata())

  return (
    <Mycontext.Provider value={UseFirebase()}>{children}</Mycontext.Provider>
  );
};

export default AuthProvider;
