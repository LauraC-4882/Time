import React from "react";
import {Card} from "@nextui-org/react";

export const CustomCard5 = () => (
  <Card className="w-[200px] space-y-5 p-4" radius="2x3">
    <div className="h-24 rounded-lg bg-default-300"></div>
    <div className="space-y-3">
      <div style={{fontFeatureSettings:"inherit", fontSizeAdjust:"scale 10px", fontFamily:"fantasy"}}>
        <p>Wanna send a secrete to your family or friends?</p></div>
      <div style={{fontFamily:"monospace"}}>- We will send this private letter to your receivers at your wished time in any form you want!</div>
      <div style={{fontFamily:"monospace"}}>- </div>
    </div>
  </Card>
);
