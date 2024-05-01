import { XIcon } from "../icons/XIcon"
import { TwIcon } from "../icons/TwIcon"
import { AuthButtonServer } from "./auth-button-server"
import { MenuList } from "./menu-list"
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { type Post } from "@/app/types/posts"

export function Menu({
    userName, 
    userAvatarUrl,
    userFullName
}: {
    userName: string
    userAvatarUrl: string
    userFullName: string
}
)
    {

    return (
        <section className="flex flex-1 flex-col p-5 pl-0 h-full">
            <div className="flex flex-row justify-center items-center space-x-5 pb-5">
                <XIcon />
                <TwIcon />
            </div>
            <div className="flex flex-row">
                <MenuList />
            </div>
            <section className="flex flex-col mt-28 items-start  ">
            <div className="flex gap-x-2">
                <Link href={`/${userName}`}>
                    <Avatar src={userAvatarUrl} size="md" />
                </Link>
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
                    <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
                </div>
                <div className="">
                    <AuthButtonServer />
                </div>
            </div>

            </section>

        </section>
    )
}