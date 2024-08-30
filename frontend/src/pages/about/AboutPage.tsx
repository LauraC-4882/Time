import {Avatar, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Information from "./Information";
import Offer from "./Offer";
export const AboutPage = () => {
  return (
    <div className="about" style={{backgroundColor: "#F6EDBD"}}>
      <center>
        <div
          className="Abouttop"
          style={{display: "flex", flexDirection: "row", padding: "70px", justifyContent: "center"}}
        >
          <div style={{display: "flex", flexDirection: "column", padding: "70px"}}>
            <h1
              className="about.slogan"
              style={{display: "flex", color: "dark yellow", fontSize: "50px", fontWeight: "bold"}}
            >
              "Our Slogan"
            </h1>
            <p style={{fontSize: "14px", color: "grey"}}>introduction</p>
          </div>
          <Image
            width={300}
            src={"https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"}
          />
        </div>
      </center>
      <center>
        <div className="arrow"></div>
      </center>
      <div style={{padding: "30px"}}>
        <Offer />
      </div>
      <center></center>
      <div style={{padding: "30px"}}>
        <Information />
      </div>

      {/* footer */}
      <div style={{padding: "30px"}}></div>
    </div>
  );
};

export default AboutPage;
