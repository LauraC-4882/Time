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
import {useEffect, useState, useRef} from "react";
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
  const timeoutRef = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300); // 300ms delay before hiding the profile card
  };

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
          <NavbarItem className="profile-container">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link href="/profile">
                <Badge content="5" color="primary">
                  <Avatar radius="md" size="md" src={user.photoURL} />
                </Badge>
              </Link>
              {isHovering && (
                <div className="profile-card">
                  <ProfileCard user={user} />
                </div>
              )}
            </div>
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
