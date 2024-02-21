import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
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
    <div class="about" style={{padding:"10px, 100px 10px 100px", }}>
    <Navbar>
      
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
    <div class="Abouttop" justify="center" style={{display: "flex", flexDirection: "row"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <p style={{size:"14px"}}>Our Slogan</p>
        <h4>introduction</h4>
      </div>
      <Image
      width={300}
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    </div>
    <Offer />
    <Information />
      </div>
  );
};

export default About;
