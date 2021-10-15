import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const initializfirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializfirebase;
