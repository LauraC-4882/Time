import React from "react";
import {Card, Spacer} from "@nextui-org/react";

export const CustomCard3 = ({custom3}) => (
  
  <><Card className="w-[400px] h-[400px] p-4">
    <div className="space-y-3">
      <div style={{ width: "20%" }}></div>

      <div>{custom3.title}</div>
      <div>{custom3.name}</div>
      <div>{custom3.date}</div>
      <div>{custom3.content}</div>
    </div>
  </Card><Spacer x={6} /></>
);
