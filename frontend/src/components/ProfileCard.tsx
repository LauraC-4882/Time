import React, { useEffect, useState } from "react";
import { Card, CardHeader, Avatar } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { UserInfo } from "@models/userModel";
import { getUserInfo } from "../services/userService";

export const ProfileCard = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        getUserInfo(authUser.uid).then((userInfo) => {
          console.log("userInfo", userInfo);
          if (userInfo) {
            setUser(userInfo);
          } else {
            setUser(null);
          }
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            size="md"
            src={user ? (user.photoURL ? user.photoURL : "") : undefined}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user?.displayName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user?.email}
            </h5>
          </div>
        </div>
      </CardHeader>
      <Listbox aria-label="Dynamic Actions">
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit" href="/profile/settings">
          Edit file
        </ListboxItem>
        <ListboxItem
          key="signout"
          color="danger"
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign out
        </ListboxItem>
      </Listbox>
    </Card>
  );
};

export default ProfileCard;
