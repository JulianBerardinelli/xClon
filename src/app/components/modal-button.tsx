'use client'
import {useDisclosure} from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { GithubIcon } from './icons';

export function ButtonModal({ children }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} className="flex flex-row items-start justify-start gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80"
            color="primary" variant="light"
            startContent
            >
                {children}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}
            backdrop="blur" 
            classNames={{
                body: "py-6",
                backdrop: "bg-[#1DA1F2]/40 backdrop-opacity-40",
                base: "border-[#ffff]/35 bg-[black] dark:bg-[#19172c] text-[white]",
                header: "border-b-[1px] border-[#ffff]/35",
                footer: "border-t-[1px] border-[#ffff]/35",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Contenido No disponible</ModalHeader>
                            <ModalBody
                            >
                                
                                <p>
                                    La seccion seleccionada esta en desarrollo, pronto estara disponible👨‍💻🚀
                                </p>
                                <img className='size-30' src="./dinosaurio.gif" alt="" />
                            </ModalBody>
                            <ModalFooter>
                                <a target='_blank' href="https://github.com/JulianBerardinelli/xClon">
                                <Button color="primary" variant="light" onPress={onClose}>
                                    <GithubIcon />
                                    Colaborar en Github
                                </Button>
                                </a>
                                <Button color="danger" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}