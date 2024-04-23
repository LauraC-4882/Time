import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function AIbutton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div class="aiButton">

            <Button style={{
                zIndex: 9999,
                position: 'fixed',
                right: '2%',
                bottom: '2%',
                width: '75px',
                height: '75px'
            }}
                onPress={onOpen}
                className="bg-gradient-to-tr from-orange-500 to-yellow-500 text-white shadow-lg">
                <div>Ask AI</div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody>
                                    {/* <div class="mantine-Text-root mantine-1vmrctp" style="text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px;">Ask AI</div> */}
                                    Ask AI
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

            </Button>

        </div >
    )
}