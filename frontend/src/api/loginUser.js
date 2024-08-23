import {auth} from "../firebase/index.ts";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
export const signUpUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up: " + user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const loginUserWithPassword = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
