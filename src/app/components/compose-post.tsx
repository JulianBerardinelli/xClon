"use client"
import { Avatar } from "@nextui-org/react"
import Link from "next/link"
import { ComposePostButton } from "./compose-post-button"
import { addPost } from "../actions/add-post-action"
import { useRef, useState } from "react"
import { ComposePostFooter } from "./compose-post-footer"
import { IconWorld } from "@tabler/icons-react"

export function ComposePost ({
    userName, 
    userAvatarUrl
}: {
    userName: string
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null)
    const [content, setContent] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [showReminder, setShowReminder] = useState<boolean>(false); 

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
        setShowReminder(false);
    }
    const handleTextAreaClick = () => {
        setShowReminder(true);
    }

    return ( 
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            setContent('');
            setShowReminder(false);
            formRef.current?.reset()
        }} className='flex flex-row space-x-3 py-4 px-3 border-b border-white/20' 
        >
            <Link href={`/${userName}`}>
                <Avatar src={userAvatarUrl} className="size-10"/>
            </Link>
            <div className='flex flex-1 flex-col gap-y-4 px-2'>
                <textarea 
                name="content"
                value={content} 
                onChange={handleContentChange}
                onClick={handleTextAreaClick}
                rows={4}
                className="w-full text-xl p-1 px-2 bg-black placeholder-gray-500 resize-none outline-none h-10"
                placeholder="¡¿Qué está pasando?!"
                ></textarea>
                {showReminder && (
                    <div className="flex flex-1 items-center text-sky-500 text-sm font-bold border-b border-white/20 pb-3">
                        <div className="flex gap-x-2 rounded-full hover:bg-sky-900/35 px-3 py-1">
                            <IconWorld size={20}/>
                            Cualquier persona puede responder
                        </div>
                    </div>
                )}
                <div className="flex flex-1 justify-between items-center">
                    <ComposePostFooter/>
                    <ComposePostButton disabled={!content} />
                </div>
            </div>
        </form>
    )
}
