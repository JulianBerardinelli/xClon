import { IconBell, IconClipboardList, IconHomeFilled, IconMail, IconSearch, IconUsers } from "@tabler/icons-react";

export function MenuList() {
    return (
        <ul className="flex flex-col gap-y-2">
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconHomeFilled size={24} />
                Inicio
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconSearch size={24} />
                Explorar
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconBell size={24} />
                Notificaciones
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconMail size={24} />
                Mensajes
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconClipboardList size={24} />
                Listas
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconUsers size={24} />
                Comunidad
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconClipboardList size={24} />
                Perfil
            </button>
            <button className="flex flex-row items-center gap-x-4 rounded-full py-2 px-4 hover:bg-sky-900/35 transition text-xl font-medium text-white/80">
                <IconClipboardList size={24} />
                Listas
            </button>
            <button 
            className="bg-sky-500 text-md disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full w-full py-2 self-end"
        >
            Postear
        </button>
        </ul>
    )
}