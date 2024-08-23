import React from "react";
import {Card, CardHeader, Avatar} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {signOut} from "firebase/auth";
import {auth} from "../firebase/index.ts";

export const ProfileCard = ({user}) => {
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  const rowData = [
    {
      name: user.name,
      role: user.role,
      status: user.status,
    },
  ];

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={user.avatarUrl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{user.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{user.username}</h5>
          </div>
        </div>
      </CardHeader>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody>
          {rowData.map((data, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key}>{data[column.key]}</TableCell>
              ))}
            </TableRow>
          ))}
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
