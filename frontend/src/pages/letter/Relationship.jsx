import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,Select,SelectItem} from "@nextui-org/react";
import { useState } from "react"

const relation = [
  { label: 'Family members', value: 'Family members' },
  { label: 'Friends', value: 'Friends' },
  { label: 'Couple', value: 'Couple' },
  { label: 'Crush', value: 'Crush' },
]

export default function Relationship() {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <Select
      items={relation}
      placeholder="Select a relationship"
      className="max-w-xs"
    >
      {(relation) => <SelectItem key={relation.value}>{relation.label}</SelectItem>}
    </Select>
    
      
  );
}
