import {createUserWithEmailAndPassword, signInWithEmailAndPassword, User} from "firebase/auth";
import {auth} from "../firebase/index";
import {createUserDocument, getUserInfo, updateUserInfo} from "../service/userService";
import {UserInfo} from "@/model/userModel";

export async function registerUser(email: string, password: string): Promise<User | null> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await createUserDocument(user);
    console.log("User registered and document created successfully");
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
}

export async function loginUser(email: string, password: string): Promise<UserInfo | null> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userInfo = await getUserInfo(user.uid);
    console.log("User logged in successfully", userInfo);
    return userInfo;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
}

export async function updateProfile(updatedInfo: Partial<UserInfo>): Promise<void> {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateUserInfo(user.uid, updatedInfo);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  } else {
    console.log("No user is signed in");
  }
}
