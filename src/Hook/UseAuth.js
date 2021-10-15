import { useContext } from "react";
import { Mycontext } from "../Context/AuthProvider/AuthProvider";

const UseAuth = () => {
  return useContext(Mycontext);
};

export default UseAuth;
