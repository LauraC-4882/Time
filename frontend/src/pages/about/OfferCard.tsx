import React, { useState } from "react";
import { Card, CardFooter, Spacer, Image } from "@nextui-org/react";
import './styles.css'; 

export const OfferCard = ({ img, head, p1, p2, p, pp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div style={{ flexDirection: "row", justifyContent: "center", margin: "30px" }}>
      <Card className="col-span-3 sm:col-span-2 h-[350px]" isPressable onClick={handleClick}>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-[300px] h-full object-cover"
          src={img}
        />
        <CardFooter className="absolute bg-white/80 border-zinc-100/50 z-10 bottom-4 w-[calc(100%_-_24px)] h-[300px] border-1 py-1 z-10 ml-3 rounded-large flex flex-col items-center justify-center">
          <h4 className="text-black font-medium text-large custom-font text-center">{head}</h4>  
          <h4 className="text-black font-medium text-medium custom-font text-center">{p1}</h4>        
          
          {isOpen && (
            <>
              <p className="text-tiny text-black/60 font-bold custom-font text-center">{p}</p> 
            </>
          )}
          <h4 className="text-black font-medium text-medium custom-font text-center">{p2}</h4>        
          {isOpen && (
            <>
              <p className="text-tiny text-black/60 font-bold custom-font text-center">{pp}</p>
            </>
          )}
        </CardFooter>
      </Card>
      <Spacer x={4} />
    </div>
  );
};
