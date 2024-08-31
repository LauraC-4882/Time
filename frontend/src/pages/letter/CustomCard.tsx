import React from "react";
import {Card} from "@nextui-org/react";

export const CustomCard = () => (
  <Card className="w-[400px] h-[400px] p-4">
    <div className="space-y-3">
      <div style={{width:"20%"}}></div>
      <div>Title</div>
      <div>Receiver name</div>
      <div>Receiving Date</div>
      <center>
      <div>Brief Content</div>
</center>

    </div>
  </Card>
);
