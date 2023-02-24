"use client"

import { useEffect, useReducer, useState } from "react"

function Cookies(){
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function hasCookie(key) {
        let user = getCookie(key);
        if(user != "") return true  
        return false
      }
    
    return{
        getCookie,
        setCookie,
        hasCookie
    }
}

const cookies = Cookies()

export function ButtonDarkMode(props){
    const [theme, setTheme] = useState(props.theme);

    useEffect(()=>{
        if(cookies.getCookie("theme") == 'dark' || (!(cookies.hasCookie("theme")) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.body.classList.add("dark")
            cookies.setCookie("theme", "dark")
        }else{
            document.body.classList.remove("dark")
            cookies.setCookie("theme", "light")
        }
    })

    function changeThemeMode(){
        if(cookies.getCookie("theme") == "dark"){
            cookies.setCookie("theme", "light")
        }else{
            cookies.setCookie("theme", "dark")
        }
        setTheme((prevTheme)=>prevTheme == "dark"? "light": "dark")
    }

    return(
        <button onClick={changeThemeMode} className="bg-yellow-400 text-black py-1 px-3 dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white">
            Cambiar a modo {theme == "dark"? "claro": "oscuro"}
        </button>
    )
}