import React, {useEffect, useState} from "react";
import {Card, CardHeader, Avatar} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {onAuthStateChanged, signOut, User} from "firebase/auth";
import {auth} from "../firebase/index.ts";

export const ProfileCard = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={user ? (user.photoURL ? user.photoURL : "") : undefined}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user?.displayName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">@{"test"}</h5>
          </div>
        </div>
      </CardHeader>
      <Table aria-label="User information table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{user?.displayName}</TableCell>
            <TableCell>{user?.emailVerified}</TableCell>
            <TableCell>{user?.emailVerified}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Listbox aria-label="Dynamic Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
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
