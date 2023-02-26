"use client";

import Link from "next/link"
import { useState } from "react";
import { Cookies } from "@/assets/javascript/cookies";
import { store } from "@/store/store";
import { Settings } from "./Settings";

const cookies = Cookies()

export function CookiesWarning(props){
    const [open, setOpen] = useState(props.open);

    function closeInfo(){
        setOpen(false)
        cookies.setCookie("acepted cookies", "true", 365)
    }

    function openSettings(){
        setOpen(false)
        store.dispatch({type: "open setting cookies"})
    }

    return(
        <>
            <Settings />
            <div className={`${open? "" : "-z-10 "}fixed bottom-0 inset-x-0 w-full min-h-[100px] p-0 flex justify-center items-center bg-white dark:bg-slate-800`}>
            <div className="container p-3 flex gap-3 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-1/2 lg:basis-3/4 flex flex-col justify-center items-center gap-3">
                    <p className="text-xl text-slate-900 dark:text-white">Este sitio usa cookies</p>
                    <p className="text-large text-slate-500 dark:text-slate-400">
                        Al navegar en nuestro sitio aceptas que usemos cookies para 
                        <span> <Link onClick={closeInfo} className="underline" href="/privacity">personalizar tu experiencia</Link> </span>
                        según la Declaración de Privacidad.
                    </p>
                </div>
                <div className="basis-full md:basis-1/2 lg:basis-1/4 flex justify-center items-center gap-3">
                    <button onClick={closeInfo} className="bg-yellow-400 text-black py-1 px-3 dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white">
                        Entendido
                    </button>
                    <button onClick={openSettings} className="bg-yellow-400 text-black py-1 px-3 dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white">
                        Configurar cookies
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

