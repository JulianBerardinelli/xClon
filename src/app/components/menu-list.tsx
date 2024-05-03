import { IconBell, IconClipboardList, IconHomeFilled, IconMail, IconSearch, IconUsers } from "@tabler/icons-react";
import { ButtonModal } from "./modal-button";


export function MenuList() {
    return (
        <ul className="flex flex-col gap-y-2">
            <ButtonModal>
                <IconHomeFilled size={24} />
                Inicio
            </ButtonModal>
            <ButtonModal>
                <IconSearch size={24} />
                Explorar
            </ButtonModal>
            <ButtonModal>
                <IconBell size={24} />
                Notificaciones
            </ButtonModal>
            <ButtonModal>
                <IconMail size={24} />
                Mensajes
            </ButtonModal>
            <ButtonModal>
                <IconClipboardList size={24} />
                Listas
            </ButtonModal>
            <ButtonModal>
                <IconUsers size={24} />
                Comunidad
            </ButtonModal>
            <ButtonModal>
                <IconClipboardList size={24} />
                Perfil
            </ButtonModal>
            <ButtonModal>
                <IconClipboardList size={24} />
                Listas
            </ButtonModal>
            <button 
            className="bg-sky-500 text-md disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full w-full py-2 self-end"
        >
            Postear
        </button>
        </ul>
    )
}