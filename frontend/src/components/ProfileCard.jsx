import React from 'react';
import { Card, CardHeader, Avatar } from '@nextui-org/react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";

// Profile card component
const ProfileCard = () => {
  // Column definitions for the table
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

  // Actions for the listbox
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  // Placeholder data for the table (this should be replaced with real data)
  const rowData = [
    {
      name: "John Doe",
      role: "Software Engineer",
      status: "Active",
    },
  ];

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
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

      {/* Listbox with actions */}
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        onAction={(key) => alert(key)}
      >
        {(item) => (
          <ListboxItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </Card>
  );
};

export default ProfileCard;
