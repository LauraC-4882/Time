import {
  Button,
  Card,
  Tooltip,
  Badge,
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ProfileCard} from "./ProfileCard.tsx";
import "./Header.css";

import {onAuthStateChanged} from "firebase/auth";
import Login from "./Login/Login.jsx";
import Signup from "./sign/sign.jsx";
import {auth} from "../firebase/index.ts";
let Header = () => {
  let navList = [
    {
      content: "HOME",
      link: "/",
    },
    {
      content: "LETTERS",
      link: "/letters",
    },
    {
      content: "ABOUT",
      link: "/about",
    },
  ];
  const [isHovering, setIsHovering] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Navbar
      className="navbar"
      style={{display: "flex", backgroundColor: "rgba(250, 233, 137, 0.8)"}}
    >
      <NavbarBrand className="navbar-brand">
        <a href=".">
          <p className="font-bold text-inherit">TIME</p>
        </a>
      </NavbarBrand>
      <NavbarContent className="navbar-content" justify="center">
        {navList.map(({content, link}) => (
          <NavbarItem key={content}>
            <Link color="foreground" href={link}>
              {content}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {user ? (
          <NavbarItem
            className="profile-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsHovering(false);
              }, 300);
            }}
          >
            <Link href="/profile">
              <Badge content="5" color="primary">
                <Avatar radius="md" size="md" src={user.photoURL} />
              </Badge>
            </Link>
            {isHovering && (
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="profile-card"
              >
                <ProfileCard user={user} />
              </div>
            )}
          </NavbarItem>
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
