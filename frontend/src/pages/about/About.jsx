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

    <div class="Abouttop" style={{display: "flex", flexDirection: "row", padding:"70px", marginLeft:"15%"}}>

      <div style={{display:"flex", flexDirection:"column",padding:"70px"}}>

        <h>"Our Slogan"</h>
        <h4>introduction</h4>
      </div>
      <center>
      <Image
      width={300}
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
</center>
    </div>
    <Image
      width={300}
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    
    <Offer />
    <Information />
      </div>
  );
};

export default About;