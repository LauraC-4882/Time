// import { addIcon } from 'iconify-icon';
import React, { useEffect, useState, useRef } from "react";

import {Button, Image, Link,  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,Divider,Pagination,Tabs, Tab, Card, CardBody,Spacer} from "@nextui-org/react";
import LetterForm from "./LetterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/index";
import { getUserInfo } from "../../services/userService";
import { UserInfo } from "../../models/userModel";
import {CustomCard1} from "./CustomCard1.tsx";
import LetterContent1 from "./LetterContent1.ts";
import {CustomCard2} from "./CustomCard2.tsx";
import LetterContent2 from "./LetterContent2.ts";
import {CustomCard3} from "./CustomCard3.tsx";
import LetterContent3 from "./LetterContent3.ts";






export default function LetterPage() {
  const [openModal, setOpenModal] = useState(false);
  let handleOpenPost = () => {
    setOpenModal(true);
  };
  let handleRequestQuitPost = () => {
    setOpenModal(false);
  };
  return (
    <>
    
      <div style={{padding:"70px",width:"100%"}}>
        <center>
      <div className="space-y-1">
        <h4 className="text-medium font-medium">Write to Your Future Self</h4>
        <p className="text-small text-default-400">This letter is your personal time capsule for you or your receivers, waiting to be opened and cherished by the person in the future. Start writing your story today!</p>
      
      </div>
      </center>
      <Divider className="my-4" />
      
      <div className="flex w-full flex-col size-lg">
      <Tabs aria-label="Options" style={{ width: '100%' }} >
        <Tab key="All Letters" title="All Letters">
        <div className="flex" style={{ padding: '16px', width: '100%'}}>
        {LetterContent1.map((e) => (
            <CustomCard1 custom={e}></CustomCard1>
          ))}
    </div>
        </Tab>
        <Tab key="Sent" title="Sent">
        <div className="flex" style={{ padding: '16px', width: '100%'}}>
        {LetterContent2.map((e) => (
            <CustomCard2 custom2={e}></CustomCard2>
          ))}
    </div>
        </Tab>
        <Tab key="Draft" title="Draft">
        <div className="flex" style={{ padding: '16px', width: '100%'}}>
        {LetterContent3.map((e) => (
            <CustomCard3 custom3={e}></CustomCard3>
          ))}
    </div>
        </Tab>
        
      </Tabs>
      <div style={{}}>

<Button color="primary" onClick={handleOpenPost} style={{width:"10%"}}>
  Create new form
</Button>
<LetterForm handleQuit={handleRequestQuitPost} isOpen={openModal}></LetterForm>
</div>
    </div>  
    </div>
    
    <div style={{padding:"70px"}}>
    <Pagination loop showControls color="warning" total={5} initialPage={1} />

    </div>
    
    </>
  );
}
