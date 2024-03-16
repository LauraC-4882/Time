import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";
import {CustomCard3} from "./CustomCard3";
import {CustomCard1} from "./CustomCard1";
import {CustomCard2} from "./CustomCard2";
import {CustomCard4} from "./CustomCard4";



let Information = () =>{
    return(
        <><div class="Aboutbutton" style={{ display: "flex", flexDirection: "column" }}>
          <center>
        <div style={{fontsize:"30px",fontFamily:"fantasy"}}>
        <h>Team of Time Informations</h></div>
        <div style={{fontsize:"20px"}}>
        <h>Why are we doing this</h></div>
        <div style={{color:"gray",fontsize:"10px"}}>
        <p>We want to be the small drops to form the warm ocean</p></div>
        </center>
      </div><div class="cards" >
      <div className="flex" style={{flexDirection:"row", justifyContent:"center"}}>
        
      <CustomCard1 />
      <Spacer x={4} />
      <CustomCard2 />
      <Spacer x={4} />
      <CustomCard3 />
      <Spacer x={4} />
      <CustomCard4 />
    </div>

        </div></>

    )
}
export default Information;