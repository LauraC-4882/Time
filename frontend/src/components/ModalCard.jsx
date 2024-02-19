import { useEffect } from "react";

import Modal from "react-modal";
export const ModalCard = ({ isOpen, handleQuit, children }) => {
  isOpen = isOpen ? true : false;
  useEffect(() => {
    Modal.setAppElement("#modal");
  }, []);
  const customStyles = {
    content: {
      top: "10%",
      left: "30%",
      right: "30%",
      bottom: "20%",
      // marginRight: "-50%",
      // transform: "translate(-50%, -50%)",
    },
    "border-radius": "50px",
  };
  return (
    <div>
      <div id="modal"></div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={handleQuit}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalCard;
