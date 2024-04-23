import {Button, Divider, Input,RadioGroup, Radio,Checkbox,DatePicker} from "@nextui-org/react";
import React, {useRef} from "react";
import TextEditor from "../../components/Editor/RichTextEditor";
import ModalCard from "../../components/ModalCard";
import Relationship from "../letter/Relationship"
import Receive from "../letter/Receive"

import {CalendarDate} from "@internationalized/date";
export let LetterForm = ({handleQuit, isOpen}) => {
  const editorRef = useRef(null);
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <ModalCard handleQuit={handleQuit} isOpen={isOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "40px",
          marginBottom:"20px",
          marginTop:"20px"
        }}>
        <RadioGroup 
      label="Are you writing the letter anonymously?" style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>
      <Radio value="yes">Yes</Radio>
      <Radio value="no">No</Radio>
    </RadioGroup>
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>If yes, your name:</p>
        <Input type="name" label="Your Name" />
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>How would you call your receiver?</p>
        <Input type="name" label="Receiver Name" />    
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>What is your relationship with your receiver?</p>
        <Relationship style={{fontSize: 14, fontWeight: 700, marginBottom: "10px",width:"10px"}}/>
        <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        
        <p style={{fontSize: 10, fontWeight: 500, marginBottom: "10px",color:"red"}}>I understand that I am sending to someone unknown and might cause danger, which I will take the danger myself...
</p>
      </Checkbox>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {/* <DatePicker label={"Send Date"} placeholderValue={new CalendarDate(1995, 11, 6)} className="max-w-sm" /> */}
    </div>
    <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>What is your sending method to your receiver?</p>
        <Receive style={{fontSize: 14, fontWeight: 700, marginBottom: "10px",width:"10px"}}/>
        <Input type="address" label="Receiver address" />   
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>Your contact information</p>
        <Input type="email" label="Email/phone" />   
        <p style={{fontSize: 14, fontWeight: 700, marginBottom: "10px"}}>Main letter</p>
        <TextEditor></TextEditor>

        <div
          style={{display: "flex", width: "inherit", justifyContent: "flex-end", marginTop: "20px"}}
        >
          <div style={{display: "flex", width: "35%", justifyContent: "space-between"}}>
            <Button color="primary" radius="full">
              Save as draft
            </Button>
            <Button color="primary" radius="full">
              Send
            </Button>
            <Button color="primary" radius="full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalCard>
  );
};
export default LetterForm;