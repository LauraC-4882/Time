import React, {useState} from "react";
import {Button, Card, CardBody, Input, Textarea, Spacer, Switch} from "@nextui-org/react";
import {UserInfo} from "@models/userInfo"; // Update this path

interface EditCardProps {
  user: UserInfo;
  onSave: (updatedUser: UserInfo) => void;
  onCancel: () => void;
}

export default function EditCard({user, onSave, onCancel}: EditCardProps) {
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [bio, setBio] = useState(user.bio || "");
  const [location, setLocation] = useState(user.location || "");
  const [notifications, setNotifications] = useState(user.notifications || false);
  const [privateProfile, setPrivateProfile] = useState(user.privateProfile || false);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");

  const handleSave = () => {
    const updatedUser: UserInfo = {
      ...user,
      displayName,
      email,
      photoURL,
      bio,
      location,
      notifications,
      privateProfile,
      phoneNumber,
      lastUpdated: new Date(),
    };
    onSave(updatedUser);
  };

  return (
    <Card shadow="none" style={{width: "100%", backgroundColor: "rgba(250, 233, 137, 0.0)"}}>
      <CardBody>
        <Input
          label="Display Name"
          placeholder="Enter your display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          label="Photo URL"
          placeholder="Enter your photo URL"
          value={photoURL || ""}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <Spacer y={2} />
        <Textarea
          label="Bio"
          placeholder="Enter your bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          label="Location"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Spacer y={2} />
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber || ""}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Spacer y={2} />
        <Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)}>
          Receive Notifications
        </Switch>
        <Spacer y={2} />
        <Switch checked={privateProfile} onChange={(e) => setPrivateProfile(e.target.checked)}>
          Private Profile
        </Switch>
      </CardBody>
      <Spacer y={4} />
      <div style={{display: "flex", justifyContent: "flex-end", padding: "0 16px 16px 0"}}>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
        <Spacer x={2} />
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
      </div>
    </Card>
  );
}
