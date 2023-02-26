"use client";
import { useState } from "react";
import { Settings } from "./CookieWarning"

export function ChangeCookies(){
    const [open, setOpen] = useState(false)

    function openSettings(){
        setOpen(true)
    }
    function closeSettings(){
        setOpen(false)
    }

    return(
        <>
            <span className="underline" onClick={openSettings}>podés cambiar tus preferencias de cookies desde la sección de privacidad</span>
            <Settings open={open} closeSettings={closeSettings} />
        </>
    )
} 