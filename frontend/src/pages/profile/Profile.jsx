import React from "react";
import { Tabs, Tab, Card, User, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import Cad from "../utils/post";
import People from "../utils/PeopleList.jsx";

export default function Profile() {
  let navigate = useNavigate();
  function handleEditClick() {
    // 导航到'/edit'页面
    navigate('/edit');
  }

  return (
    <div style={{ display: "flex", padding: "50px 200px 50px 200px" }}> {/* This centers the Tabs vertically and horizontally on the screen */}
      <div style={{ display: "inherit" }} className="flex w-4/5 max-w-4xl flex-col m-4"> {/* This ensures the Tabs component doesn't stretch too wide */}
        <Tabs aria-label="Options" color="warning" variant="underlined">
          <Tab key="followings" title="Followings" style={{ marginRight: '80px' }}>
            <Card>
              <CardBody>
                <People />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="followers" title="Followers" style={{ marginRight: '80px' }}>
            <Card className="max-w-3/4">
              <CardBody className="max-w-3/4">
                <People />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="drafts" title="Drafts" style={{ marginRight: '80px' }}>
            <Card>
              <CardBody>
                <Cad />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="likes" title="Likes">
            <Card>
              <CardBody>
                <Cad />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="flex column w-4/5 max-w-4xl flex-col m-4" style={{ marginRight: '80px' }}>
        <div className="flex" style={{ marginLeft: '20%', marginTop: '10%', marginBottom: '5%' }}>
          <div>
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
              }}
            />
          </div>

          <div style={{ marginLeft: '50%' }}>
            <Button color="primary" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '5%', marginLeft: '20%' }}>Phone number</div>
      </div>
    </div>
  );
}