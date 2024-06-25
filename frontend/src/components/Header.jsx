import { Badge, Avatar } from "@nextui-org/react";
import { Outlet, Link } from "react-router-dom";
import SignupPopup from './Signup/Signup';


let Header = () => {
  return (<div style={{ height: "15vh", display: "flex", width: "100%", padding: "10px 80px", backgroundColor: "rgba(250, 233, 137, 1)" }}>

    <div style={{ width: "10%", backgroundColor: "gray", marginRight: "20px" }}>HAHA</div>
    <div style={{ width: "90%", display: "flex", flexDirection: "column" }}>

      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
          <Link to="/"><span>HOME</span></Link>

          <Link to="/letters"><span>LETTERS</span></Link>

          <Link to="/about"><span>ABOUT</span></Link>
        </div>
        <Badge content="5" color="primary">
        <SignupPopup></SignupPopup>

          <Avatar
            radius="md"
            size="md"
            src="https://avatars.githubusercontent.com/u/90215880?s=400&u=24a47d8141c8729a19f8f84a42b1024ef7b9cf98&v=4"
          />
        </Badge>
      </div>
    </div>
    <span style={{ position: "absolute", top: "6%", left: "30%", fontStyle: "italic", fontSize: "20px", color: "black" }}>“Enrich your life today. Yesterday is history，and tomorrow is mystery.”</span>


  </div>);
};


export default Header;
