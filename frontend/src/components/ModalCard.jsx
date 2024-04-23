import { useEffect } from "react";

import Modal from "react-modal";
export const ModalCard = ({ isOpen, handleQuit, children }) => {
  isOpen = isOpen ? true : false;
  useEffect(() => {
    Modal.setAppElement("#modal");
  }, []);
  const customStyles = {
    "content": {
      top: "10%",
      left: "20%",
      right: "20%",
      bottom: "20%",
    },
    "border-radius": "50px",
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="General Modal"
        onRequestClose={handleQuit}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalCard;
