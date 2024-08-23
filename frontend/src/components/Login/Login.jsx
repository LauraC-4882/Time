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
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import {Mail} from "./Mail.jsx";
import {Lock} from "./Lock.jsx";
import {loginUserWithPassword, signUpUser} from "../../api/loginUser.js";

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
export default function Login() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isInvalid) {
      setIsInvalid(false);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  const handleLogin = () => {
    if (!loginUserWithPassword(email, password)) {
      setIsInvalid(true);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Log in
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
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
                  isInvalid={isInvalid}
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
                  isInvalid={isInvalid}
                  errorMessage="Invalid email or password"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleLogin}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
