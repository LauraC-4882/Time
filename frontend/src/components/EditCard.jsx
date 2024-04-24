import React, { useState } from "react";
import { Button, Card, CardBody, Textarea, Spacer } from "@nextui-org/react";

export default function EditCard({ user, onSave, onCancel }) {
    let updatedUser = {
        avatar: user.avatar,
        name: user.name,
        phone: user.phone,
        description: user.description
    };
    const [name, setName] = useState(updatedUser.name);
    const [phone, setPhone] = useState(updatedUser.phone);
    const [description, setDes] = useState(updatedUser.description);
    const [avatar, setAva] = useState(updatedUser.avatar);

    return (
        <Card shadow="none"
            style={{ width: "100%", backgroundColor: "rgba(250, 233, 137, 0.0)" }}>
            <CardBody>
                <Textarea
                    label="Name"
                    placeholder="Enter your name"
                    className="max-w-xs"
                    value={name}
                    onChange={(event) => {
                        let newName = event.target.value;
                        updatedUser.name = newName;
                        setName(newName)
                    }}
                />
                <Spacer y={5}></Spacer>
                <Textarea
                    label="Phone"
                    placeholder="Enter your name"
                    className="max-w-xs"
                    value={phone}
                    onChange={(event) => {
                        let newPhone = event.target.value;
                        updatedUser.phone = newPhone;
                        setPhone(newPhone)
                    }}
                />
                <Spacer y={5}></Spacer>
                <Textarea
                    label="Description"
                    placeholder="Enter your name"
                    className="max-w-xs"
                    value={description}
                    onChange={(event) => {
                        let newDes = event.target.value;
                        updatedUser.description = newDes;
                        setDes(event.target.value)
                    }}
                />
            </CardBody>
            <Spacer y={10}></Spacer>
            <div style={{ display: "flex", marginLeft: "2%", marginBottom: "2%" }}>
                <Button onClick={() =>

                    onSave(updatedUser)
                }
                    style={{ width: "15%", right: "0px" }}
                    color="primary"
                >
                    Save
                </Button>
                <Spacer x={4}></Spacer>
                <Button onClick={onCancel}
                    style={{ width: "15%" }}
                    color="primary">
                    Cancel
                </Button>
                <Spacer x={4}></Spacer>
                <Button onClick={onCancel}
                    style={{ width: "15%" }}
                    color="primary">
                    Exit
                </Button>
            </div>
        </Card>
    );
}
