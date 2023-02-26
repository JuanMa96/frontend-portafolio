"use client";
import Link from "next/link"
import { useState } from "react";
import { Cookies } from "@/assets/javascript/cookies";

const cookies = Cookies()

export function CookiesWarning(){
    const [openInfo, setOpenInfo] = useState(true)
    const [openSetting, setOpenSetting] = useState(false);

    function closeInfo(){
        setOpenInfo(false)
        cookies.setCookie("acepted cookies", "true", 365)
    }

    function openSettings(){
        setOpenSetting(true);
        setOpenInfo(false)
    }

    function closeSettings(){
        setOpenSetting(false)
        cookies.setCookie("acepted cookies", "true", 365)
    }

    return(
        <>
            <Settings open={openSetting} closeSettings={closeSettings} />
            <div className={`${openInfo? "" : "-z-10 "}fixed bottom-0 inset-x-0 w-full min-h-[100px] p-0 flex justify-center items-center bg-white dark:bg-slate-800`}>
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

export function Settings({open, closeSettings}){
    return(
        <div className={`${open? "z-30" : "-z-30"} fixed inset-0  flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900`}>
            <div className="basis-full md:basis-2/3 lg:basis-1/2 p-3">
                <div className="flex flex-col p-3 gap-3 bg-white border-slate-800 dark:bg-slate-800 dark:border-white border-4 rounded-xl shadow-xl">
                    <button onClick={closeSettings} className="dark:text-white align-middle font-icons self-start">h</button>
                    <div>
                        <p className="text-2xl">Configurar cookies</p>
                        <p>
                            Las cookies son una tecnología que nos permite conocer cómo usás nuestro sitio. Con esta información, hacemos que sea más fácil guardar tus preferencias.
                            <span> <Link href="/privacity" onClick={closeSettings} className="underline">Conocé más sobre cookies.</Link> </span> 
                        </p>
                    </div>
                    <div>
                        <p className="text-xl">
                            Cookies esenciales
                        </p>
                        <p>
                            Sirven para reconocerte cuando ingresás, guardar tus preferencias de configuración. No pueden deshabilitarse porque son necesarias para el funcionamiento de nuestro sitio.
                        </p>
                    </div>
                    <button onClick={closeSettings} className="bg-yellow-400 text-black py-1 px-3 dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white self-start">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
