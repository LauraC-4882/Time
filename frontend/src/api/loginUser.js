import {auth} from "../firebase/index.ts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import {generateRandomAvatarUrl} from "../utils/AvatarGenerator.ts";
export const signUpUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up: " + user);
      updateProfile(user, {
        displayName: email,
        photoURL: generateRandomAvatarUrl(),
      }).then();
    })
    .catch((error) => {
      console.log("Error signing up user: " + error);
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
