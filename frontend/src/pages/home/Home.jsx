import { Avatar, Image, Tab, Tabs } from "@nextui-org/react";

let Home = () => {
  let handler = (e) => {};
  return (
    <>
      <div style={{ display: "flex", padding: "10px 50px 10px 50px" }}>
        <div style={{ display: "inherit" }}>
          <Image width={200} src="?" alt="maay"></Image>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Tabs
              aria-label="Options"
              radius={"none"}
              style={{ backgroundColor: "white" }}
            >
              <Tab key="photos" title="Photos"></Tab>
              <Tab key="music" title="Music"></Tab>
              <Tab key="videos" title="Videos"></Tab>
            </Tabs>
            <div>aasodijasoidajs</div>
          </div>
        </div>
        <Avatar name="JC" onClick={handler}></Avatar>
      </div>
    </>
  );
};

export default Home;
