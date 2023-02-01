"use client"

import { handleClientScriptLoad } from "next/script"
import { useState } from "react"
import Link from 'next/link'
import { ButtonDarkMode } from "./ButtonDarkMode"

export function Header(){
    const [open, setOpen] = useState(false)


    function handleClick(){
        setOpen(false)
    }

    function handleClickButton(){
        setOpen(prev => !prev)
    }


    let classListUl = open? "": "-translate-y-full " 
    return(
        <header className="bg-cyan-400 dark:bg-slate-800 h-14 fixed w-full">
            <nav className="h-full flex justify-between items-center mx-auto container px-3">
                <Link href="/" onClick={handleClick} className="z-10 font-mono text-3xl dark:text-white">Brand</Link>
                <div className="relative flex gap-3">
                    <ButtonDarkMode className="z-10"/>
                    <button className="dark:text-white" onClick={handleClickButton}>X</button>
                </div>
                <div className={classListUl + "fixed inset-0 flex justify-center transition-transform duration-1000 bg-gradient-to-b from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900 dark:text-white"}>
                    <div className="container h-14 flex pr-3 justify-end items-center z-10">
                        <button className="dark:text-white" onClick={handleClickButton}>X</button>
                    </div>
                    <div  className="absolute inset-0 flex justify-center items-center">
                        <ul>
                            <li>
                                <Link href="/" onClick={handleClick} className="text-5xl md:text-9xl">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={handleClick} className="text-5xl md:text-9xl">
                                    About
                                </Link>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
