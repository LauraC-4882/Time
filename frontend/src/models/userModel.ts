import {User} from "firebase/auth";
import {generateRandomAvatarUrl} from "../utils/AvatarGenerator";

export interface UserInfo {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  bio?: string;
  location?: string;
  notifications?: boolean;
  privateProfile?: boolean;
  createdAt?: Date;
  lastUpdated?: Date;
  phoneNumber?: string;
}

export const defaultUserInfo: Omit<UserInfo, "uid"> = {
  displayName: "",
  photoURL: "",
  bio: "",
  email: "",
  phoneNumber: "",
  location: "",
  notifications: true,
  privateProfile: false,
  createdAt: new Date(),
  lastUpdated: new Date(),
};

export function createUserInfo(authUser: User): UserInfo {
  return {
    uid: authUser.uid,
    ...defaultUserInfo,
    displayName: authUser.displayName || "",
    photoURL: authUser.photoURL || generateRandomAvatarUrl(),
    email: authUser.email || "",
    phoneNumber: authUser.phoneNumber || "",
    createdAt: new Date(),
    lastUpdated: new Date(),
  };
}
