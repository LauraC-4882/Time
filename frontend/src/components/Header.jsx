import { Button, Card, Tooltip, Badge, Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import HoveProfile from "./ProfileCard.jsx"
import { Logo } from "./Logo.jsx";
import './Header.css';


let Header = () => {

  let navList = [
    {
      content: "HOME",
      link: "/"
    },
    {
      content: "LETTERS",
      link: "/letters"
    },
    {
      content: "ABOUT",
      link: "/about"
    }
  ]
  const [isHoveringA, setIsHoveringA] = useState(false);
  const [isHoveringB, setIsHoveringB] = useState(false);
  return (

    <Navbar className="navbar"
      style={{ display: "flex", backgroundColor: "rgba(250, 233, 137, 0.8)" }}>
      <NavbarBrand className="navbar-brand">
        <Logo />
        <p className="font-bold text-inherit">TIME</p>
      </NavbarBrand>
      <NavbarContent className="navbar-content" justify="center">
        {navList.map(({ content, link }) => (
          <NavbarItem key={content}> {/* Make sure to add a unique key prop here */}
            <Link color="foreground" href={link}>{content}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">

        {/* Handles floating window logic */}
        <NavbarItem className="profile-container"
          onMouseEnter={() => setIsHoveringA(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsHoveringA(false);
            }, 500);

          }}
        >
          <Link href="/profile">
            <Badge content="5" color="primary" >
              <Avatar
                radius="md"
                size="md"
                src="https://avatars.githubusercontent.com/u/90215880?s=400&u=24a47d8141c8729a19f8f84a42b1024ef7b9cf98&v=4" />
            </Badge>
          </Link>
          {(isHoveringA || isHoveringB) && (
            <div
              onMouseEnter={() => setIsHoveringB(true)}
              onMouseLeave={() => setIsHoveringB(false)}
              className="profile-card">
              <HoveProfile></HoveProfile>
            </div>
          )}

        </NavbarItem >
      </NavbarContent>


    </Navbar>


  );
};


export default Header;


