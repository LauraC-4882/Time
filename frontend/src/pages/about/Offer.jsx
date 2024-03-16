import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

import {CustomCard} from "./CustomCard";
import {CustomCard5} from "./CustomCard5";
import {CustomCard6} from "./CustomCard6";

let Offer = () =>{
    return(
      <><div class="Aboutmid" style={{ display: "flex", flexDirection: "column" }}>
          <center>
          <div style={{fontsize:"30px",fontFamily:"fantasy"}}>
        <h>Our services</h></div>
        <div style={{fontsize:"20px"}}>
        <h>What we offer</h></div>
        <div style={{color:"gray",fontsize:"10px"}}>
        <p>enjoy and protect a peaceful environment for sharing feelings</p></div>
        </center>
      </div><div class="cards" >
      <div className="flex" style={{flexDirection:"row", justifyContent:"center"}}>
        
      <CustomCard />
      <Spacer x={4} />
      <CustomCard5 />
      <Spacer x={4} />
      <CustomCard6 />
    </div>

        </div></>
    )
}
export default Offer;