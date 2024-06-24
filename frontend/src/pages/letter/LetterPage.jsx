import add from "./Add.svg";
// import { addIcon } from 'iconify-icon';
import Reactm, { useState } from "react";
import {Button,Image, Link} from "@nextui-org/react";
import LetterForm from "./LetterForm";


export default function LetterPage() {
  const [openModal, setOpenModal] = useState(false);
  let handleOpenPost = () => {
    setOpenModal(true);
  };
  let handleRequestQuitPost = () => {
    setOpenModal(false);
  };
  return (
  <><div>This is Letter Page</div>
  <Button color="primary" onClick={handleOpenPost}>
            Create new form
          </Button>
  <LetterForm handleQuit={handleRequestQuitPost} isOpen={openModal}></LetterForm>

  </>
);
}
