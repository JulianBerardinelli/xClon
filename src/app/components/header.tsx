"use client"
import { useState } from 'react';

export function Header() {
    const [activeButton, setActiveButton] = useState('parati');

    const handleButtonToggle = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <header className="grid grid-cols-2 border-b border-white/25">
            <button
                className={`col-span-1 p-5 hover:bg-slate-900 transition cursor-pointer 
                text-md font-bold
                ${activeButton === 'parati' ? 'text-sky-500 border-b-3 border-sky-500 transition-colors duration-500' : ''}`}
                onClick={() => handleButtonToggle('parati')}
            >
                Para ti
            </button>
            <button
                className={`col-span-1 p-5 hover:bg-slate-900 transition cursor-pointer 
                text-md font-bold
                ${activeButton === 'siguiendo' ? 'text-sky-500 border-b-3 border-sky-500 transition-colors duration-500' : ''}`}
                onClick={() => handleButtonToggle('siguiendo')}
            >
                Siguiendo
            </button>
        </header>
    );
}