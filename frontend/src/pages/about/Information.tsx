import {Image, Card, CardHeader, CardBody} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";
import {InfoCard} from "./InfoCard";
import ContentInfo from "./ContentInfo";
let Information = () => {
  return (
    <>
      <div class="Aboutbutton" style={{display: "flex", flexDirection: "column"}}>
        <center>
          <div
            style={{
              display: "flex",
              color: "#D97706",
              fontSize: "10px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <h>Our Team</h>
          </div>
          <div
            style={{
              display: "flex",
              color: "black",
              fontSize: "30px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <h>Our Awesome Team</h>
          </div>
          <div style={{display: "flex", color: "gray", fontSize: "20px", justifyContent: "center"}}>
            <h>Why are we doing this</h>
          </div>
          <div style={{display: "flex", color: "gray", fontSize: "15px", justifyContent: "center"}}>
            <p>We want to be the small drops to form the warm ocean</p>
          </div>
        </center>
      </div>
      <div class="cards">
        <div
          className="flex"
          style={{flexDirection: "row", justifyContent: "center", margin: "30px"}}
        >
          {ContentInfo.map((e) => (
            <InfoCard info={e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Information;
