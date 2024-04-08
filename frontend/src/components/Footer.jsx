import { Button } from "@nextui-org/react";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


let Footer = () => {
  return (
    <div
      style={{
        height: "20vh",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", width: "20%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>LOGO</p>
          <p>Sendme</p>
          <p>phone number</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 700, marginBottom: "20px" }}>Resource</span>
          <a href="" style={{ margin: "10px 0px" }}>
            <span>Developement</span>
          </a>
          <a href="">
            <span>Product</span>
          </a>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", width: "25%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 700, marginBottom: "20px" }}>Quick Links</span>
          <a href="" style={{ margin: "10px 0px" }}>
            <span>Home</span>
          </a>
          <a href="">
            <span>Our Services</span>
          </a>
          <a href="">
            <span>Know Our Team</span>
          </a>

        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <span style={{ fontWeight: 700, marginBottom: "20px" }}>Follow Us On</span>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button isIconOnly style={{ backgroundColor: "white", border: "1px solid #ccc" }} radius="full" aria-label="Like">
              <FaFacebookF />

            </Button>

            <Button isIconOnly style={{ backgroundColor: "white", border: "1px solid #ccc" }} radius="full" aria-label="Like">
              <VscTwitter />

            </Button>
            <Button isIconOnly style={{ backgroundColor: "white", border: "1px solid #ccc" }} radius="full" aria-label="Like">
              <FaYoutube />

            </Button>
            <Button isIconOnly style={{ backgroundColor: "white", border: "1px solid #ccc" }} radius="full" aria-label="Like">
              <FaInstagram />

            </Button>

          </div>
          <span style={{ marginTop: "10px" }}>© 2023 TailGrids.</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
