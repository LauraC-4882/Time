import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,Select,SelectItem} from "@nextui-org/react";
import { useState } from "react"

const receive = [
  { label: 'Email', value: 'Email' },
  { label: 'Message', value: 'Message' },
  { label: 'Address', value: 'Address' },
]

export default function Receive() {
  const [selectedOption, setSelectedOption] = useState('')
  const [value, setValue] = React.useState(new Set([]));

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <><Select
          items={receive}
          placeholder="Receiving method"
          className="max-w-xs"
          selectedKeys={value}
            onSelectionChange={setValue}
      >
          {(receive) => <SelectItem key={receive.value}>{receive.label}</SelectItem>}
      </Select><p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px", marginTop:"10px"}}>Receiver's {value}</p></>

      
  );
}
