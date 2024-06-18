'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


const FileStructureModal=()=> {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} className="btn">See project filestructure</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent style={{backgroundColor:'#18181B'}} className="text-slate-200 rounded-xl overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody >
           
             <Zoom>
             <img src="https://raw.githubusercontent.com/prasannashrestha011/YoutubeClone/main/uploads/filestructure.jpg" className="w-full"/>
             </Zoom>
            
              </ModalBody>
              <ModalFooter>
                <Button className="btn btn-pr" onClick={onClose}>
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
export default FileStructureModal
