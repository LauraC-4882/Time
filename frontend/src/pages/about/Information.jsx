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
        <div style={{display:"flex",color:"#D97706", fontSize:"10px", fontWeight:"bold",justifyContent:"center"}}>
        <h >Our Team</h>
        </div>
          <div style={{display:"flex",color:"black", fontSize:"30px", fontWeight:"bold",justifyContent:"center"}}>
        <h >Our Awesome Team
</h>
        </div>
        <div style={{display:"flex",color:"gray",fontSize:"20px",justifyContent:"center"}}>
        <h>Why are we doing this
</h></div>
        <div style={{display:"flex",color:"gray",fontSize:"15px",justifyContent:"center"}}>
        <p>We want to be the small drops to form the warm ocean

</p></div>
        </center>
      </div><div class="cards" >
      <div className="flex" style={{flexDirection:"row", justifyContent:"center", margin:"30px"}}>
        
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