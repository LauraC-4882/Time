import {Navbar,Accordion, AccordionItem,NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";

import Offer from "./Offer";
import Information from "./Information";
import arrow from "./images.png";
import about from "./About.css";

let About = () => {
  return (
    <div class="about" style={{backgroundColor:"#F6EDBD", }}>
    <Navbar style={{backgroundColor:"#FAE989"}}>
      
      <div style={{ display: "flex" }}>
        <div style={{ display: "inherit" }}>
        <NavbarBrand>
        {/* <TimeLogo /> */}
        <p className="name">TIME</p>
      </NavbarBrand>
      </div>
          {/* nav bar header */}
          <div style={{ display: "flex", flexDirection: "column" }}>
              <NavbarContent className="nav" justify="center" style={{padding:"10px"}}>
              <NavbarItem>
                
                <a href="#">
                  About
                </a>
                </NavbarItem>
                <NavbarItem>
                <a href="/">Main</a>
                </NavbarItem>
                <NavbarItem>
                <a href="#">Letters</a>
                </NavbarItem>
              
            
            <div>some changing</div>
        </NavbarContent>

               </div> 
        <NavbarContent class="dropProfile">
        <a href="/profile"><Avatar name="JC"></Avatar></a>


        </NavbarContent>
      </div>
    </Navbar>
<center>
    <div class="Abouttop" style={{display: "flex", flexDirection: "row", padding:"70px", justifyContent:"center"}}>

      <div style={{display:"flex", flexDirection:"column",padding:"70px"}}>

      <h class="about.slogan" style={{display:"flex", color:"dark yellow", fontSize:"50px", fontWeight:"bold"}}>"Our Slogan"</h>
      <p style={{fontSize: "14px", color: "grey"}}>introduction</p>
      </div>
      <Image
      width={300}
      src={"https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"}
    />
    </div>
    
    </center>
    <center>
    <div class="arrow"></div>
    </center>
    <div style={{padding:"30px"}}>
    <Offer /></div>
    <center>
    
    </center>
    <div style={{padding:"30px"}}>
    <Information /></div>

    {/* footer */}
    <div style={{padding:"30px"}}>

    </div>
    
      </div>
    
  );
};

export default About;