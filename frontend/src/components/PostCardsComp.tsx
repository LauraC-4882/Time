import {Avatar, Button, Card, CardBody, Divider} from "@nextui-org/react";
import {VscArchive, VscComment, VscHeart} from "react-icons/vsc";
import React from "react";

interface PostCardsProps {
  children: React.ReactNode;
}

export const PostCards: React.FC<PostCardsProps> = ({children}) => {
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

interface PostCardProps {
  children: React.ReactNode;
  avatar?: string;
  name?: string;
  userId?: string;
  likes?: number;
  comments?: number;
  saves?: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  children,
  avatar = "JC",
  name = "Jackson Chen",
  userId = "1",
  likes = 0,
  comments = 0,
  saves = 0,
}) => {
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
          <Avatar size="sm" name={name} color="primary" src={avatar === "JC" ? "" : avatar} />
          <span style={{marginLeft: "10px"}}>{name}</span>
        </div>
        <Divider style={{margin: "2% 0", width: "75%", alignSelf: "center "}} />
        <div style={{height: "40%"}}>
          <span>{children}</span>
        </div>
        <Divider style={{margin: "2% 0"}} />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div
            style={{
              display: "inherit",
              width: "40%",
              justifyContent: "space-between",
            }}
          >
            <div style={{display: "inherit", alignItems: "center"}}>
              <VscHeart />
              <span style={{marginLeft: "2px", fontSize: 14}}>{likes}</span>
            </div>
            <div style={{display: "inherit", alignItems: "center"}}>
              <VscComment />
              <span style={{marginLeft: "2px", fontSize: 14}}>{comments}</span>
            </div>
            <div style={{display: "inherit", alignItems: "center"}}>
              <VscArchive />
              <span style={{marginLeft: "2px", fontSize: 14}}>{saves}</span>
            </div>
          </div>
          <Button color="primary" style={{marginRight: "4%"}}>
            Reply
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostCards;
