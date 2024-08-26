import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {useState} from "react";

// Define the relationship options
const relation = [
  {label: "Family members", value: "Family members"},
  {label: "Friends", value: "Friends"},
  {label: "Couple", value: "Couple"},
  {label: "Crush", value: "Crush"},
];

interface RelationshipProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Relationship({style, ...props}: RelationshipProps) {
  return (
    <div style={style} {...props}>
      <Select items={relation} placeholder="Select a relationship" className="max-w-xs">
        {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
      </Select>
    </div>
  );
}
