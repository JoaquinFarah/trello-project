'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { createList } from "@/actions/create-list";
import { useParams } from "next/navigation";

export const ListForm =()=> {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const params = useParams();

  return (
    <>
      <Button onPress={onOpen} className="bg-black text-white">Create list</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create List</ModalHeader>
              
            <form action={createList}>
                    <ModalBody>
                        <Input
                        autoFocus
                        id="title"
                        label="title"
                        type="text"
                        name="title"
                        placeholder="Enter list tile"
                        variant="bordered"
                        />
                        <input
                        readOnly
                        hidden
                        name="organizationId"
                        value={params.organizationId}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="primary" type="submit">
                        Submit
                        </Button>
                    </ModalFooter>
                </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
