import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

import {CustomCard} from "./CustomCard";
import {CustomCard5} from "./CustomCard5";
import {CustomCard6} from "./CustomCard6";

let Offer = () =>{
    return(
      <><div class="Aboutmid" style={{ display: "flex", flexDirection: "column" }}>
          <center>
        <h3>our services</h3>
        <h1>What we offer</h1>
        <h4>Some little comments</h4>
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