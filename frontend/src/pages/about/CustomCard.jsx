import React from "react";
import {Card} from "@nextui-org/react";

export const CustomCard = () => (
  <Card className="w-[200px] space-y-5 p-4" radius="2x3">
    <div className="h-24 rounded-lg bg-default-300"></div>
    <div className="space-y-3">
      <div style={{fontFeatureSettings:"inherit", fontSizeAdjust:"scale 10px", fontFamily:"fantasy"}}>
        <p>Wanna save a time capsule for your future?</p></div>
      <div style={{fontFamily:"monospace"}}>- We will send this private letter to you at your targeted time at targeted location</div>
      <div style={{fontFamily:"monospace"}}>- Open the time capsule one day in the future to revoke the current unforgettable-memories</div>
    </div>
  </Card>
);
