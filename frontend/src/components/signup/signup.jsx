// Filename - Form.js
import React from "react";
import {useState} from "react";
import {
  NextUIProvider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import {Mail} from "./Mail.jsx";
import {Lock} from "./Lock.jsx";
import {validateEmail} from "../../utils/strings.ts";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {signUpUser} from "../../api/loginUser.js";
const pageStyle = {
  content: {
    top: "50%",
    button: "50%",
    right: "50%",
    left: "50%",
    padding: "20px",
    position: "fixed",
    marginRight: "50%",
    transform: "translate(-40%,-40%)",
  },
};
//bind with modal in div
export default function Signup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [repassword, setRepassword] = useState("");

  const [isPasswordHasUpperCase, setIsPasswordHasUpperCase] = useState(true);
  const [isPasswordHasLowerCase, setIsPasswordHasLowerCase] = useState(true);
  const [isPasswordHasDigit, setIsPasswordHasDigit] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(true);
  };
  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const handleSignup = (e) => {
    //check if email is valid
    if (!validateEmail(email)) {
      alert("Invalid email");
      setIsEmailValid(false);
      return;
    }
    //check if password is valid
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      setIsPasswordValid(false);
      return;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
      alert("Password must contain at least one uppercase letter");
      setIsPasswordHasUpperCase(false);
      return;
    }
    const hasLowerCase = /[a-z]/.test(password);
    if (!hasLowerCase) {
      alert("Password must contain at least one lowercase letter");
      setIsPasswordHasLowerCase(false);
      return;
    }
    const hasDigit = /[0-9]/.test(password);
    if (!hasDigit) {
      alert("Password must contain at least one digit");
      setIsPasswordHasDigit(false);
      return;
    }

    //check if password is the same as repassword
    if (password !== repassword) {
      alert("Password and re-entered password do not match");
      return;
    }

    signUpUser(email, password);
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Sign up
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleEmailChange}
                />
                <Input
                  endContent={
                    <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handlePasswordChange}
                />
                <Input
                  endContent={
                    <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Re-enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleRepasswordChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  style={{marginRight: "20px"}}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose} onClick={handleSignup}>
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
