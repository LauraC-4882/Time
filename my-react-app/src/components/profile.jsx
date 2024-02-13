import React from "react";

//define
function Profile() {
  console.log("check")
  return (
    <div class = "profile">
        <div class = "header">
            <div class = "provebs"></div>
        </div>
        <div class = "posts">
            <nav>
                <ul>
                    <li><a class = "following" href = "#">following: x</a></li>
                    <li><a class = "followers" href = "#">follower: y</a></li>
                    <li><a class = "draft" href = "#">draft</a></li>
                    <li><a class = "likes" href = "#">likes : n</a></li>
                </ul>
            </nav>
        </div>
        <div class = "info">
            <div class = "edit"></div>
            <div class = "avater"></div>
            <div class = "username"></div>
            <div class = "phone"></div>
            <div class = "describe"></div>
        </div>
    </div>
  );
}
export default Profile;


