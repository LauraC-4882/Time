import React, { useState } from "react";
import { Tabs, Tab, Card, User, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import Cad from "../utils/post";
import People from "../utils/PeopleList.jsx";
import EditCard from "../../components/EditCard.jsx";
import { users } from '../../components/UserData.jsx';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: users.name,
    description: users.description,
    avatar: users.avatar,
    phone: users.phone
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    setUser({
      ...user, // Spread the existing user to maintain any existing properties
      ...updatedUser // This will override the existing properties with those from updatedUser
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

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
      <div className="flex column w-4/5 max-w-4xl flex-col m-4" >
        <div className="flex" style={{ width: "100%", marginLeft: '20%', marginTop: '10%', marginBottom: '5%' }}>

          {isEditing ? (
            <EditCard
              user={user} onSave={handleSave} onCancel={handleCancel}

            />
          ) : (
            <div>
              <User
                name={users.name}
                description={users.description}
                avatarProps={{
                  src: users.avatar
                }}
                onClick={handleEditClick}
              />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}