import React, { createContext } from "react";
import Usedata from "../../Hook/Usedata";
import UseFirebase from "../../Hook/UseFirebase";
import Usegithubapi from "../../Hook/UsegithubApi";

export const Mycontext = createContext();

const AuthProvider = ({ children }) => {
  const firebase_methods = UseFirebase();
  const data = Usedata();
  const githubapi = Usegithubapi();
  const all_function = {
    firebase_methods,
    data,
    githubapi,
  };

  return (
    <Mycontext.Provider value={all_function}>{children}</Mycontext.Provider>
  );
};

export default AuthProvider;
