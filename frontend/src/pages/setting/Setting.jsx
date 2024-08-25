import React, {useEffect, useState} from "react";
import {Card, CardBody, Button, Input, Avatar, Switch, Spacer} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged, updateProfile} from "firebase/auth";
import {getFirestore, doc, getDoc, updateDoc} from "firebase/firestore";
import {auth} from "../../firebase/index.ts";

export default function ProfileSettings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
    bio: "",
    email: "",
    phoneNumber: "",
    location: "",
    notifications: true,
    privateProfile: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);
          setFormData({
            displayName: userData.displayName || authUser.displayName || "",
            photoURL: userData.photoURL || authUser.photoURL || "",
            bio: userData.bio || "",
            email: authUser.email || "",
            phoneNumber: userData.phoneNumber || "",
            location: userData.location || "",
            notifications: userData.notifications !== false,
            privateProfile: userData.privateProfile || false,
          });
        } else {
          setFormData({
            displayName: authUser.displayName || "",
            photoURL: authUser.photoURL || "",
            bio: "",
            email: authUser.email || "",
            phoneNumber: "",
            location: "",
            notifications: true,
            privateProfile: false,
          });
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    console.log("Saving profile...");
    try {
      const db = getFirestore();
      await updateDoc(doc(db, "users", auth.currentUser.uid), formData);
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-xl mx-auto">
        <CardBody>
          <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>
          <div className="flex flex-col items-center mb-6">
            <Avatar
              src={formData.photoURL}
              alt={formData.displayName}
              className="w-24 h-24 text-large mb-4"
            />
            <Input
              label="Profile Picture URL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="max-w-xs"
            />
          </div>
          <div className="space-y-4">
            <Input
              label="Display Name"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
            />
            <Input label="Bio" name="bio" value={formData.bio} onChange={handleChange} />
            <Input
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            <Spacer y={2} />
            <div className="flex justify-between items-center">
              <span>Enable Notifications</span>
              <Switch
                checked={formData.notifications}
                onChange={(e) =>
                  setFormData((prev) => ({...prev, notifications: e.target.checked}))
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Private Profile</span>
              <Switch
                checked={formData.privateProfile}
                onChange={(e) =>
                  setFormData((prev) => ({...prev, privateProfile: e.target.checked}))
                }
              />
            </div>
          </div>
          <Spacer y={4} />
          <div className="flex justify-center">
            <Button color="primary" onClick={handleSave} size="lg">
              Save Changes
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
