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

import {getAuth, onAuthStateChanged} from "firebase/auth";
import Login from "./Login/Login.jsx";
import Signup from "./sign/sign.jsx";
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
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
                <Avatar
                  radius="md"
                  size="md"
                  src="https://avatars.githubusercontent.com/u/90215880?s=400&u=24a47d8141c8729a19f8f84a42b1024ef7b9cf98&v=4"
                />
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
