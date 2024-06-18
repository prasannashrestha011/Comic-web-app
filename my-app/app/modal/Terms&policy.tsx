'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="btn">Read Terms and Conditions</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent style={{backgroundColor:'#18181B'}} className="text-slate-200 rounded-xl overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody >
              <h1>Terms and Policies for Marvel Comic Sellers</h1>

<h2>1. Authenticity and Condition</h2>
<p>We uphold strict standards for the authenticity and condition of Marvel comics sold on our platform. Sellers must accurately describe each item’s condition, including any wear, tears, or restoration.</p>

<h2>2. Listing Guidelines</h2>
<p>Sellers are responsible for providing accurate and detailed listings for each Marvel comic. This includes specifying edition, publication date, artist, and any unique features.</p>




<h2>3. Privacy and Data Security</h2>
<p>We prioritize the privacy and security of our users' information. Personal data collected during transactions is handled in accordance with our privacy policy.</p>







<p>Thank you for being a part of our community dedicated to Marvel comic enthusiasts! By adhering to these terms and policies, we can ensure a safe and enjoyable experience for all. Happy selling!</p>
              </ModalBody>
              <ModalFooter>
                <Button className="btn btn-pr" onPress={onClose}>
                  Close
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
