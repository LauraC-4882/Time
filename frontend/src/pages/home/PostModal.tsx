import {Button, Divider, Input} from "@nextui-org/react";
import React, {useRef} from "react";
import TextEditor from "../../components/Editor/RichTextEditor";
import ModalCard from "../../components/ModalCard";

// Define the props type
interface PostModalProps {
  handleQuit: () => void;
  isOpen: boolean;
}

export let PostModal: React.FC<PostModalProps> = ({handleQuit, isOpen}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  return (
    <ModalCard handleQuit={handleQuit} isOpen={isOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <p style={{fontSize: 20, fontWeight: 700, margin: "0 0 10px 0"}}>Topic</p>
        <Input></Input>
        <p style={{fontSize: 20, fontWeight: 700, marginTop: "10px"}}>Write your Own Post</p>
        <Divider style={{margin: "10px 0"}} />
        <p style={{fontSize: 14, fontWeight: 700}}>Do you want to tell others?</p>
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Button color="secondary" size="md" radius="full">
            Yes
          </Button>
          <Button color="secondary" size="md" radius="full">
            No
          </Button>
        </div>
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>Write in your own words</p>

        <TextEditor />

        <div
          style={{
            display: "flex",
            width: "inherit",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <div style={{display: "flex", width: "35%", justifyContent: "space-between"}}>
            <Button color="primary" radius="full">
              Save as draft
            </Button>
            <Button color="primary" radius="full">
              Post
            </Button>
          </div>
        </div>
      </div>
    </ModalCard>
  );
};

export default PostModal;
