import {Avatar, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Information from "./Information";
import Offer from "./Offer";
export const AboutPage = () => {
  return (
    <div className="about" style={{backgroundColor: "#F6EDBD"}}>
      <center>
        <div
          className="Abouttop"
          style={{display: "flex", flexDirection: "row", justifyContent: "center"}}
        >
          <div style={{top:"100px",display: "flex", flexDirection: "column", padding: "120px",width:"40%"}}>
          <h1
              className="about.slogan"
              style={{display: "flex", color: "dark yellow", fontSize: "45px", fontWeight: "bold"}}
            >
              <p>"Connect, Reflect, and Preserve—Your Future Awaits."</p>
              
            </h1>
          </div>
          <Image style={{top:"89px"}}
            width={500}
            src={"https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"}
          />
        </div>
        <p style={{width:"70%",fontSize: "18px", color: "grey",padding:"60px"}}>Welcome to Time Capsule, a sanctuary where peace and love guide your journey of self-discovery. Here, you can connect with others, share experiences, and build a community rooted in mutual respect and understanding. Our platform offers a unique space to write letters to your future self, capturing your thoughts, dreams, and aspirations for safekeeping. Whether you seek to reflect on your past, share wisdom, or simply send a message of hope, Time Capsule ensures that your words will stand the test of time. Join us in creating a legacy of love, connection, and personal growth.</p>

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
