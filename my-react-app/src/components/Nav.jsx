import React from "react";

//define
let menu="menu";
function Nav() {
  console.log("check")
  return (
    //html
    <nav>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Post</a></li>
        <li><a href="letter">Letters</a></li>
        <li><a href="profile">Profile</a></li>
      </ul>
    </nav>
  );
}
export default Nav;


