import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import { PostCard, PostCards } from "../../components/PostCardsComp";
import SearchIcon from "../../components/icons/SearchIcon";
import PostModal from "./PostModal";
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  let handleOpenPost = () => {
    setOpenModal(true);
  };
  let handleRequestQuitPost = () => {
    setOpenModal(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
      <div
        className="main-left"
        style={{
          width: "60%",
          height: "inherit",
          display: "inherit",
          flexDirection: "inherit",
        }}
      >
        {" "}
        <div>
          <h1 style={{ fontSize: 30 }}>What’s everyone up to?</h1>
          <p style={{ color: "rgba(0,0,0,.7)" }}>Leave a comment or give them a heart</p>
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
        <PostCards>
          <PostCard>Jackson Say hi</PostCard>
          <PostCard>Jackson Say hi</PostCard>
        </PostCards>
        <div
          style={{
            display: "inherit",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PagingCard></PagingCard>
          <Button color="primary" onClick={handleOpenPost}>
            Write A New Post
          </Button>
        </div>
        <PostModal handleQuit={handleRequestQuitPost} isOpen={openModal}></PostModal>
      </div>
    </div>
  );
};

let PagingCard = () => {
  return (
    <Card style={{ width: "350px", height: "65px" }}>
      <CardBody
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around ",
        }}
      >
        <Button isIconOnly>
          <VscArrowSmallLeft style={{ width: "20px", height: "20px" }} />
        </Button>
        <Button isIconOnly>1</Button>
        <Button isIconOnly>2</Button>
        <Button isIconOnly>3</Button>
        <Button isIconOnly>
          <VscArrowSmallRight style={{ width: "20px", height: "20px" }} />
        </Button>
      </CardBody>
    </Card>
  );
};
export default Home;
