import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializfirebase from "../Firebase/Init.firebase";
initializfirebase();

const UseFirebase = () => {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [user, setuser] = useState({});

  // console.log(user);

  const [isLoding, setisLoding] = useState(true);
  const auth = getAuth();

  // google sign in
  const googlesignin = () => {
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
  };

  //   facebook login
  const facebooklogin = () => {
    const facebookprovider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookprovider);
  };

  // create useraccount with password
  const createacount = () => {
    return createUserWithEmailAndPassword(auth, useremail, userpassword);
  };

  // sign in with email and password
  const signinwithpassword = () => {
    console.log("from sign in with emailpassword");
    return signInWithEmailAndPassword(auth, useremail, userpassword);
  };

  //   on user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        setisLoding(false);
      }
      setisLoding(false);
    });
  }, []);

  //   sign out
  const signout = () => {
    signOut(auth).then(() => {
      setuser({});
    });
  };

  return {
    user,
    isLoding,
    googlesignin,
    facebooklogin,
    signout,
    setuseremail,
    setuserpassword,
    createacount,
    signinwithpassword,
    isLoding,
    setisLoding,
  };
};

export default UseFirebase;
