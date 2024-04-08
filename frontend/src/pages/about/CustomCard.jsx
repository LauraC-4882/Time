import React from "react";
import {Card, Spacer} from "@nextui-org/react";
import content from './ContentOffer';

export const CustomCard = () => (
  
  <div style={{flexDirection:"row", justifyContent:"center", margin:"30px"}}><Card className="w-[200px] space-y-5 p-4" radius="2x3">
    <div className="h-24 rounded-lg bg-default-300"></div>
    <div className="space-y-3">
      <div style={{ fontFeatureSettings: "inherit", fontSizeAdjust: "scale 10px", fontSize: "17px" }}>
        <p className="font-bold">{content.head}</p></div>
      <div>{content.p1}</div>
      <div>{content.p2}</div>
    </div>
  </Card><Spacer x={4} /></div>

);
