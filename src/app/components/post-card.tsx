'use client'

import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import Link from "next/link";
import {useState} from "react";
import { IconMessageCircle, IconTrash } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconRepeat } from "@tabler/icons-react";

type onDeleteType = (postId: number) => void;
export default function PostCard(
    {
        id, userName, avatarUrl,userFullName, content, onDelete
    } :{
        id: string;
        userName: string;
        avatarUrl: string;
        userFullName: string;
        content: string;
        onDelete: onDeleteType;
    }
) {
    const handleDelete = () => {
        onDelete(id);
    };

    const [isFollowed, setIsFollowed] = useState(false);
    return (
        <Card className="shadow-none bg-trasnparent hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer">
            <CardHeader className="justify-between">
                <div className="flex gap-x-2">
                    <Link href={`/${userName}`}>
                            <Avatar src={avatarUrl} size="md"/>
                    </Link>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-white">
                <p>
                    {content}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <button>
                <IconHeart size={18} />
                </button>
                <button>
                <IconRepeat size={18} />
                </button>
                <button>
                <IconMessageCircle size={18} />
                </button>
                <button 
                onClick={handleDelete}
                >
                <IconTrash size={18} />
                </button>
            </CardFooter>
        </Card>
    )
}