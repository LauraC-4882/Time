import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/index";
import { UserInfo, createUserInfo } from "../models/userModel";
import { User } from "firebase/auth";

export async function getUserInfo(userId: string): Promise<UserInfo | null> {
  const userRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    return {
      uid: userId,
      displayName: userData.displayName || null,
      email: userData.email || null,
      photoURL: userData.photoURL || null,
      bio: userData.bio || "",
      location: userData.location || "",
      notifications: userData.notifications || false,
      privateProfile: userData.privateProfile || false,
      phoneNumber: userData.phoneNumber || "",
      createdAt:
        userData.createdAt instanceof Timestamp
          ? userData.createdAt.toDate()
          : new Date(userData.createdAt),
      lastUpdated:
        userData.lastUpdated instanceof Timestamp
          ? userData.lastUpdated.toDate()
          : new Date(userData.lastUpdated),
    };
  } else {
    console.log("No such user document!");
    return null;
  }
}

export async function createUserDocument(authUser: User): Promise<void> {
  if (!authUser.uid) return;

  const userRef = doc(db, "users", authUser.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const userInfo = createUserInfo(authUser);
    try {
      await setDoc(userRef, userInfo);
      console.log("User document created successfully");
    } catch (error) {
      console.error("Error creating user document:", error);
    }
  }
}

export async function updateUserInfo(
  userId: string,
  updatedInfo: Partial<UserInfo>
): Promise<void> {
  const userRef = doc(db, "users", userId);
  try {
    await updateDoc(userRef, {
      ...updatedInfo,
      lastUpdated: new Date(),
    });
    console.log("User document updated successfully");
  } catch (error) {
    console.error("Error updating user document:", error);
  }
}
