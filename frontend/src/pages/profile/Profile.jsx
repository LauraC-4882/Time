import React from "react";
import {Tabs, Tab, Card, User, CardBody} from "@nextui-org/react";
import Cad from "../utils/post";

export default function Profile() {
    
  return (
    <div style={{ display: "flex", padding: "50px 200px 50px 200px" }}> {/* This centers the Tabs vertically and horizontally on the screen */}
      <div style={{ display: "inherit" }} className="flex w-4/5 max-w-4xl flex-col m-4"> {/* This ensures the Tabs component doesn't stretch too wide */}
        <Tabs aria-label="Options" color="warning" variant="underlined">
          <Tab key="followings" title="Followings" style={{ marginRight: '80px' }}>
            <Card>
              <CardBody>
                Followings: 999
              </CardBody>
            </Card>
          </Tab>
          <Tab key="followers" title="Followers" style={{ marginRight: '80px' }}>
            <Card className="max-w-3/4">
              <CardBody className="max-w-3/4">
                Followers: 321
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
                Likes: 
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="flex w-4/5 max-w-4xl flex-col m-4" style={{ marginRight: '80px' }}>
        <User   
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}
        />
      </div>
    </div>
  );
}


