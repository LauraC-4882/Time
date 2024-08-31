import React from "react";
import {Card, Spacer} from "@nextui-org/react";

export const CustomCard1 = ({custom}) => (
  
  <><Card className="w-[400px] h-[400px] p-4">
    <div className="space-y-3">
      <div style={{ width: "20%" }}></div>

      <div>{custom.title}</div>
      <div>{custom.name}</div>
      <div>{custom.date}</div>
      <div>{custom.content}</div>
    </div>
  </Card><Spacer x={6} /></>
);
