// src/components/Form.tsx

import React, {useState, useEffect} from "react";
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
import {Mail} from "./Mail";
import {Lock} from "./Lock";
import {PasswordValidationResult, validateEmail, validatePassword} from "../../utils/strings";
import {registerUser} from "../../api/auth";

export default function Signup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [isRepasswordValid, setIsRepasswordValid] = useState<boolean>(true);
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidationResult>({
    isValid: true,
    hasMinLength: true,
    hasUpperCase: true,
    hasLowerCase: true,
    hasDigit: true,
  });

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValidation(validatePassword(password));
    setIsRepasswordValid(password === repassword);
  }, [password, repassword]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepassword(e.target.value);
  };

  const handleSignup = () => {
    if (!isEmailValid || !passwordValidation.isValid || !isRepasswordValid) {
      return;
    }
    console.log("Signing up...");
    registerUser(email, password);
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
                  color={!passwordValidation.isValid ? "danger" : "primary"}
                  errorMessage={
                    !passwordValidation.hasMinLength
                      ? "Password must be at least 8 characters long"
                      : !passwordValidation.hasUpperCase
                      ? "Password must contain at least one uppercase letter"
                      : !passwordValidation.hasLowerCase
                      ? "Password must contain at least one lowercase letter"
                      : !passwordValidation.hasDigit
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
                <Button
                  color="primary"
                  onPress={handleSignup}
                  disabled={!isEmailValid || !passwordValidation.isValid || !isRepasswordValid}
                >
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
