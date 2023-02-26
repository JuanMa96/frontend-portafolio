"use client"

import { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Cookies } from "@/assets/javascript/cookies"

const cookies = Cookies()

export function DarkMode(props){
    const theme = useSelector(theme => theme)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(cookies.getCookie("theme") == 'dark' || (!(cookies.hasCookie("theme")) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.body.classList.add("dark")
            cookies.setCookie("theme", "dark", 365)
        }else{
            document.body.classList.remove("dark")
            cookies.setCookie("theme", "light", 365)
        }
    })

    function changeThemeMode(){
        if(cookies.getCookie("theme") == "dark"){
            cookies.setCookie("theme", "light", 365)
        }else{
            cookies.setCookie("theme", "dark", 365)
        }
        dispatch({type: "toggle theme"})
    }

    return(

        <button onClick={changeThemeMode} className="bg-yellow-400 text-black py-1 px-3 dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white">
            Cambiar a modo {theme == "dark"? "claro": "oscuro"}
        </button>
    )
}