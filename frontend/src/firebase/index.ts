import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl-JNkwX57ObTEW_C4eUdqWnx4He_XxEE",
  authDomain: "time-test-94705.firebaseapp.com",
  projectId: "time-test-94705",
  storageBucket: "time-test-94705.appspot.com",
  messagingSenderId: "329520582251",
  appId: "1:329520582251:web:8d8abc83f922b23ed7ab2e",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
