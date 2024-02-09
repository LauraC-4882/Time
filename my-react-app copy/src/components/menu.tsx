import React from "react";

//define
let menu="menu";
const Nav = () => {
  console.log("check")
  return (
    //html
    <nav className={menu}>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Post</a></li>
        <li><a href="#">Letters</a></li>
      </ul>
    </nav>
  );
}
 
export default Nav;


