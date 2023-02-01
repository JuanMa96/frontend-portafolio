"use client"

import { useEffect, useState } from "react"

export function ButtonDarkMode(){

    function initialTheme(){
        if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme("dark")
          } else {
            setTheme("light")
          }
    }

    const [theme, setTheme] = useState("dark")

    useEffect(initialTheme, [])
    useEffect(()=>{
        if(theme == "dark"){
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.body.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    })

    function changeThemeMode(){
        setTheme(prev=>prev == "dark"? "light" : "dark")
    }

    return(
        <button onClick={changeThemeMode} className="bg-yellow-400 text-black py-1 px-3 rounded-lg">
            Cambiar a modo {theme == "dark"? "claro": "oscuro"}
        </button>
    )
}