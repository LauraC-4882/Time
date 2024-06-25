// Filename - Form.js
import React, {useState} from "react";
import {
  NextUIProvider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import {Mail} from "./Mail.jsx";
import {Lock} from "./Lock.jsx";
import {validateEmail} from "../../utils/strings.ts";
import {signUpUser} from "../../api/loginUser.js";

export default function Signup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isRepasswordValid, setIsRepasswordValid] = useState(true);

  const [isPasswordHasUpperCase, setIsPasswordHasUpperCase] = useState(true);
  const [isPasswordHasLowerCase, setIsPasswordHasLowerCase] = useState(true);
  const [isPasswordHasDigit, setIsPasswordHasDigit] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
    setIsRepasswordValid(e.target.value === repassword);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
    setIsRepasswordValid(e.target.value === password);
  };

  const validatePassword = (password) => {
    setIsPasswordValid(password.length >= 8);
    setIsPasswordHasUpperCase(/[A-Z]/.test(password));
    setIsPasswordHasLowerCase(/[a-z]/.test(password));
    setIsPasswordHasDigit(/[0-9]/.test(password));
  };

  const handleSignup = () => {
    if (
      !isEmailValid ||
      !isPasswordValid ||
      !isPasswordHasUpperCase ||
      !isPasswordHasLowerCase ||
      !isPasswordHasDigit ||
      !isRepasswordValid
    ) {
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
                  value={email}
                  color={!isEmailValid ? "danger" : "primary"}
                  errorMessage={!isEmailValid ? "Please enter a valid email" : ""}
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
                  value={password}
                  color={
                    !isPasswordValid ||
                    !isPasswordHasUpperCase ||
                    !isPasswordHasLowerCase ||
                    !isPasswordHasDigit
                      ? "danger"
                      : "primary"
                  }
                  errorMessage={
                    !isPasswordValid
                      ? "Password must be at least 8 characters long"
                      : !isPasswordHasUpperCase
                      ? "Password must contain at least one uppercase letter"
                      : !isPasswordHasLowerCase
                      ? "Password must contain at least one lowercase letter"
                      : !isPasswordHasDigit
                      ? "Password must contain at least one digit"
                      : ""
                  }
                  onChange={handlePasswordChange}
                />
                <Input
                  endContent={
                    <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Re-enter Password"
                  placeholder="Re-enter your password"
                  type="password"
                  variant="bordered"
                  value={repassword}
                  color={!isRepasswordValid ? "danger" : "primary"}
                  errorMessage={!isRepasswordValid ? "Passwords do not match" : ""}
                  onChange={handleRepasswordChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  variant="flat"
                  onPress={onClose}
                  style={{marginRight: "20px"}}
                >
                  Close
                </Button>
                <Button color="primary" onPress={handleSignup}>
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
