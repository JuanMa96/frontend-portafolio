"use client";
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link';
import { Cookies } from '@/assets/javascript/cookies';

const cookies = Cookies()

export function SettingsChild(){
    const open = useSelector(state => state.openSettingCookies)
    const dispatch = useDispatch()

    function closeSettings(){
        cookies.setCookie("acepted cookies", "true", 365)
        dispatch({type: "close settings cookies"})
    }

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