import React, { useEffect, useState, useRef } from "react";
import {
  Badge,
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ProfileCard } from "./ProfileCard";
import "./Header.css";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./login/Login";
import SignupCard from "./sign/SignupCard";
import { auth } from "../firebase/index";
import { getUserInfo } from "../services/userService";
import { UserInfo } from "../models/userModel";
import SentenceSwitchers from "./SentenceSwitchers";

interface NavItem {
  content: string;
  link: string;
}

const Header: React.FC = () => {
  const navList: NavItem[] = [
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

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        getUserInfo(authUser.uid).then((userInfo) => {
          if (userInfo) {
            setUser(userInfo);
          } else {
            setUser(null);
          }
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300);
  };

  return (
    <Navbar
      className="navbar"
      style={{ display: "flex", height:"110px",backgroundColor: "rgba(250, 233, 137, 0.8)" }}
    >
      <NavbarBrand className="navbar-brand">
        <a href=".">
          <p className="font-bold text-inherit">TIME</p>
        </a>
      </NavbarBrand>
      <NavbarContent className="navbar-content" justify="center">
        {navList.map(({ content, link }) => (
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
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/profile">
                <Badge content="5" color="primary">
                  <Avatar
                    radius="md"
                    size="md"
                    src={user.photoURL || undefined}
                  />
                </Badge>
              </Link>
              {isHovering && (
                <div className="profile-card">
                  <ProfileCard />
                </div>
              )}
            </div>
          </NavbarItem>
        ) : (
          <>
            <Login />
            <SignupCard />
          </>
        )}

      </NavbarContent>           
       <span style={{ position: "absolute", top: "95%", left: "30%", fontStyle: "italic", fontSize: "15px", color: "grey" }}><SentenceSwitchers /></span>

    </Navbar>
  );
};

export default Header;
