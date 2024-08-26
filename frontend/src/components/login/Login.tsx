import React, {useState, ChangeEvent} from "react";
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
import {Mail} from "./Mail";
import {Lock} from "./Lock";

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

// Dummy function to simulate login
const loginUserWithPassword = (email: string, password: string): boolean => {
  // Add your login logic here
  return email === "test@example.com" && password === "password123";
};

export default function Login() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
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
