import {
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  Input,
} from "@nextui-org/react";
import { VscArchive, VscComment, VscHeart } from "react-icons/vsc";
import SearchIcon from "./components/icons/SearchIcon";

const Main = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
      <div>
        <h1 style={{ fontSize: 30 }}>What’s everyone up to?</h1>
        <p style={{ color: "rgba(0,0,0,.7)" }}>
          Leave a comment or give them a heart
        </p>
      </div>
      <div style={{ width: "300px", margin: "20px 0px" }}>
        <Input
          placeholder="Type to search..."
          size="sm"
          radius="full"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>

      <div
        style={{
          display: "inherit",
          flexDirection: "column",
        }}
      >
        <PostCard>Jackson Say hi</PostCard>
        <PostCard>Jackson Say hi</PostCard>
      </div>
    </div>
  );
};

let PostCard = ({
  children,
  avatar = "JC",
  name = "Jackson Chen",
  userId = null,
}) => {
  let userLike = userId ? userId : 123;
  let userComments = userId ? userId : 321;
  let userArchive = userId ? userId : 213;
  return (
    <Card
      style={{
        width: "60%",
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
          <Avatar
            size="sm"
            name={name}
            color="primary"
            src={avatar === "JC" ? "" : avatar}
          />
          <span style={{ marginLeft: "10px" }}>{name}</span>
        </div>
        <Divider
          style={{ margin: "2% 0", width: "75%", alignSelf: "center " }}
        />
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
              <span style={{ marginLeft: "2px", fontSize: 14 }}>
                {userLike}
              </span>
            </div>
            <div style={{ display: "inherit", alignItems: "center" }}>
              <VscComment></VscComment>
              <span style={{ marginLeft: "2px", fontSize: 14 }}>
                {userComments}
              </span>
            </div>
            <div style={{ display: "inherit", alignItems: "center" }}>
              <VscArchive></VscArchive>
              <span style={{ marginLeft: "2px", fontSize: 14 }}>
                {userArchive}
              </span>
            </div>
          </div>

          <Button color="primary" style={{ marginRight: "4%" }}>
            Reply
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default Main;
