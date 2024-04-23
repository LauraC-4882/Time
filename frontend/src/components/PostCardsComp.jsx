import { Avatar, Button, Card, CardBody, Divider, Link, Badge } from "@nextui-org/react";
import { VscArchive, VscComment, VscHeart } from "react-icons/vsc";
import HoveProfile from "./ProfileCard.jsx"
import { useState, React } from "react";
import './CardComp.css';

export let PostCards = ({ children }) => {
  return (
    <div
      style={{
        display: "inherit",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
export let PostCard = ({ children, avatar = "JC", name = "Jackson Chen", userId = null }) => {
  const [isHoveringA, setIsHoveringA] = useState(false);
  const [isHoveringB, setIsHoveringB] = useState(false);
  let userLike = userId ? userId : 123;
  let userComments = userId ? userId : 321;
  let userArchive = userId ? userId : 213;
  return (
    <Card
      style={{
        minWidth: "450px",
        height: "250px",
        marginBottom: "30px",
      }}
    >
      <CardBody>
        <div
          style={{
            height: "30%",
            display: "flex",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <div className="profile-container"
            onMouseEnter={() => setIsHoveringA(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsHoveringA(false);
              }, 500);

            }}>

            <Link href="/profile">
              <Badge content="5" color="primary" >
                <Avatar size="sm" name={name} color="primary" src={avatar === "JC" ? "" : avatar} />
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

          </div>
          <span style={{ marginLeft: "10px" }}>{name}</span>
        </div>
        <Divider style={{ margin: "2% 0", width: "75%", alignSelf: "center " }} />
        <div style={{ height: "40%" }}>
          <span>{children}</span>
        </div>

        <Divider style={{ margin: "2% 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "inherit",
              width: "40%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "inherit", alignItems: "center" }}>
              <VscHeart></VscHeart>
              <span style={{ marginLeft: "2px", fontSize: 14 }}>{userLike}</span>
            </div>
            <div style={{ display: "inherit", alignItems: "center" }}>
              <VscComment></VscComment>
              <span style={{ marginLeft: "2px", fontSize: 14 }}>{userComments}</span>
            </div>
            <div style={{ display: "inherit", alignItems: "center" }}>
              <VscArchive></VscArchive>
              <span style={{ marginLeft: "2px", fontSize: 14 }}>{userArchive}</span>
            </div>
          </div>

          <Button color="primary" style={{ marginRight: "4%" }}>
            Reply
          </Button>
        </div>
      </CardBody>
    </Card >
  );
};

export default PostCards;
