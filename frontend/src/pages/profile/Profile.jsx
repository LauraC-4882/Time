import {useEffect, useState} from "react";
import {Tabs, Tab, Card, User, CardBody, Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import Cad from "../../utils/post";
import EditCard from "../../components/EditCard.jsx";
import People from "../../utils/PeopleList.jsx";
import {auth} from "../../firebase/index.ts";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          name: user.displayName ? user.displayName : "Jackson",
          description: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
          avatar: "/avatars/avatar-1.png",
        });
      } else {
        // User is signed out, redirect to error page
        navigate("/error");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    setUser({
      ...user, // Spread the existing user to maintain any existing properties
      ...updatedUser, // This will override the existing properties with those from updatedUser
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  //TODO adding loading page later
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{display: "flex", padding: "50px 200px 50px 200px"}}>
      {" "}
      {/* This centers the Tabs vertically and horizontally on the screen */}
      <div style={{display: "inherit"}} className="flex w-4/5 max-w-4xl flex-col m-4">
        {" "}
        {/* This ensures the Tabs component doesn't stretch too wide */}
        <Tabs aria-label="Options" color="warning" variant="underlined">
          <Tab key="followings" title="Followings" style={{marginRight: "80px"}}>
            <Card>
              <CardBody>
                <People />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="followers" title="Followers" style={{marginRight: "80px"}}>
            <Card className="max-w-3/4">
              <CardBody className="max-w-3/4">
                <People />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="drafts" title="Drafts" style={{marginRight: "80px"}}>
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
      <div className="flex column w-4/5 max-w-4xl flex-col m-4">
        <div
          className="flex"
          style={{width: "100%", marginLeft: "20%", marginTop: "10%", marginBottom: "5%"}}
        >
          {isEditing ? (
            <EditCard user={user} onSave={handleSave} onCancel={handleCancel} />
          ) : (
            <div>
              <User
                name={user.name}
                description={user.description}
                avatarProps={{
                  src: user.avatar,
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
