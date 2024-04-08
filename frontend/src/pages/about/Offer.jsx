import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

import {OfferCard} from "./OfferCard";

let Offer = () =>{
    return(
      <><div class="Aboutmid" style={{ display: "flex", flexDirection: "column" }}>
          <center>
          <div style={{display:"flex",color:"#D97706", fontSize:"10px", fontWeight:"bold",justifyContent:"center"}}>
        <h >Our Services</h>
        </div>
          <div style={{display:"flex",color:"black", fontSize:"30px", fontWeight:"bold",justifyContent:"center"}}>
        <h >What we offer</h>
        </div>
        <div style={{display:"flex",color:"gray",fontSize:"20px",justifyContent:"center"}}>
        <h>What we offer</h></div>
        <div style={{display:"flex",color:"gray",fontSize:"15px",justifyContent:"center"}}>
        <p>enjoy and protect a peaceful environment for sharing feelings</p></div>
        </center>
      </div><div class="cards" >
      <div className="flex" style={{flexDirection:"row", justifyContent:"center", margin:"30px"}}>
        
      <OfferCard />
    </div>

        </div></>
    )
}
export default Offer;