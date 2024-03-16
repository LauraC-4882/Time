import React from "react";
import {Card} from "@nextui-org/react";

export const CustomCard3 = () => (
  <Card className="w-[200px] space-y-5 p-4" radius="2x3">
    <div className="h-24 rounded-lg bg-default-300"></div>
    <div className="space-y-3">
      <div style={{fontFeatureSettings:"inherit", fontSizeAdjust:"scale 10px", fontFamily:"fantasy"}}>
        <p>Backend</p></div>      
        <div style={{fontFamily:"monospace"}}>- role</div>
      <div style={{fontFamily:"monospace"}}>- contact information:</div>
    </div>
  </Card>
);
