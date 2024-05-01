import { IconCalendarTime, IconGif, IconMapPin, IconMoodSmile, IconPhoto, IconServer2 } from "@tabler/icons-react";
import { useState } from "react";

export function ComposePostFooter(){

    return(
        <section className="flex flex-1 self-start items-center justify-start gap-x-1">
            <div className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconPhoto size={22} color="#00B4FF"/>
            </div>
            <div  className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconGif size={22} color="#00B4FF"/>
            </div>
            <div  className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconServer2 size={22} color="#00B4FF" />
            </div>
            <div  className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconMoodSmile size={22}  color="#00B4FF"/>
            </div >
            <div  className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconCalendarTime size={22}  color="#00B4FF"/>
            </div >
            <div  className="rounded-full hover:bg-sky-900/35 transition p-2">
                <IconMapPin size={22}  color="#00B4FF"/>
            </div >
        </section>

    )
}

