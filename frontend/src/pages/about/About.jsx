import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import Profile from "../profile/Profile"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let About = () => {
  return (
    <Navbar>
      
      <div style={{ display: "flex", padding: "10px 50px 10px 50px" }}>
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
              
            
            <div>some changing sentences</div>
        </NavbarContent>

               </div> 
        <NavbarContent class="dropProfile">
        <a href="/profile"><Avatar name="JC"></Avatar></a>


        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default About;
