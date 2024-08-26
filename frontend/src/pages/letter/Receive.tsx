import React, {useState} from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {Key} from "@react-types/shared";

type ReceiveOption = {
  label: string;
  value: string;
};

const receiveOptions: ReceiveOption[] = [
  {label: "Email", value: "Email"},
  {label: "Message", value: "Message"},
  {label: "Address", value: "Address"},
];

interface ReceiveProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Receive({style, ...props}: ReceiveProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [value, setValue] = useState<"all" | Set<Key>>(new Set());

  const handleSelectionChange = (keys: "all" | Set<Key>) => {
    setValue(keys instanceof Set ? keys : new Set());
  };

  return (
    <div style={style} {...props}>
      <Select
        items={receiveOptions}
        placeholder="Receiving method"
        className="max-w-xs"
        selectedKeys={value}
        onSelectionChange={handleSelectionChange}
      >
        {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
      </Select>
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Receiver's {Array.from(value).join(", ")}
      </p>
    </div>
  );
}
