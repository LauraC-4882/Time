// Filename - Form.js
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";


const pageStyle={
    content:{
        top:"50%",
        button: "50%",
        right:"50%",
        left:"50%",
        padding:"20px",
        position:"fixed",
        marginRight:"50%",
        transform:"translate(-40%,-40%)",
    }
}
//bind with modal in div
export default function Signup() {
	// States for registration
    const[modalIsOpen, setIsOpen] = React.useState(false);
    function open(){
        setIsOpen(true);
    }
    function close(){
        setIsOpen(false);
    }
    //after modal appear
    useEffect(()=>{Modal.setAppElement("#modal");},[]);

    return (
        <div id="modal">
            <Modal
            isOpen ={modalIsOpen}
            onRequestClose={close}
            >
            <p>signup</p>
            </Modal>
            <Button onClick={open}>signup</Button>

        </div>
    )
}

