import { useDispatch } from "react-redux"

export function ChangeCookiesChild(){
    const dispatch = useDispatch(false)

    function openSettings(){
        dispatch({type: "open setting cookies"})
    }

    return(
        <>
            <span className="underline cursor-pointer" onClick={openSettings}>podés cambiar tus preferencias de cookies desde la sección de privacidad</span>
        </>
    )
}