import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import ContentInfo from './ContentInfo';


export const InfoCard = () =>(
  <div style={{flexDirection:"row", justifyContent:"center", margin:"30px"}}><Card className="col-span-3 sm:col-span-2 h-[300px]">

    <Image
      removeWrapper
      alt="Card background"
      className="z-0 w-full h-full object-cover"
      src={ContentInfo.img} />
    <CardFooter className="absolute bg-white/80 border-zinc-100/50 z-10 bottom-4 w-[calc(100%_-_24px)] border-1 py-1 z-10 ml-3 rounded-large flex-col !items-start">
      <p className="text-tiny text-black/60 uppercase font-bold">{ContentInfo.role}</p>
      <h4 className="text-black font-medium text-large">{ContentInfo.description}</h4>
    </CardFooter>
  </Card><Spacer x={4} /></div>
  );

