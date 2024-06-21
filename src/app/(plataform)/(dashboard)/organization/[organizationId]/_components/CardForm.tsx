'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { createList } from "@/actions/create-list";
import { useParams } from "next/navigation";
import { createCard } from "@/actions/create-card";

export const CardForm =()=> {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const params = useParams();

  return (
    <>
      <Button onPress={onOpen} className="bg-black text-white">Create card</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Card</ModalHeader>
              
            <form action={createCard}>
                    <ModalBody>
                        <Input
                        autoFocus
                        id="title"
                        label="title"
                        type="text"
                        name="title"
                        placeholder="Enter card title"
                        variant="bordered"
                        />
                        <input
                        readOnly
                        hidden
                        name="organizationId"
                        value={params.organizationId}
                        />
                        <Input
                        name="listId"
                        id="listId"
                        label="list id"
                        placeholder="Enter list id"

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
