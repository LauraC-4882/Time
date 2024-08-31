import React from "react";
import {Card, Spacer} from "@nextui-org/react";

export const CustomCard2 = ({custom2}) => (
  
  <><Card className="w-[400px] h-[400px] p-4">
    <div className="space-y-3">
      <div style={{ width: "20%" }}></div>

      <div>{custom2.title}</div>
      <div>{custom2.name}</div>
      <div>{custom2.date}</div>
      <div>{custom2.content}</div>
    </div>
  </Card><Spacer x={6} /></>
);
