import { ChangeCookies } from "@/components/ChangeCookies"

export default function Privacity(){
    return(
        <div className="p-3 flex justify-center items-center">
            <div className="container p-3 grid grid-cols-1 gap-3 bg-white dark:bg-slate-800 shadow-xl rounded-2xl text-base md:text-lg">
                <h1 className="text-3xl">
                    Cómo usamos cookies en esta web
                </h1>
                <div>
                    <p>
                        Las cookies nos ayudan a reconocerte cuando ingresás y guardar tus preferencias de configuración para brindarte una experiencia personalizada: 
                    </p>
                    <ul className="pl-10 list-disc">
                        <li>
                            Guardar el tema del sitio
                        </li>
                    </ul>
                </div>
                <p>
                    Si no estás de acuerdo con nuestro uso de cookies, 
                    <ChangeCookies />
                    . Aplicaremos los cambios que hagas en el navegador que estés usando.
                </p>
                <p>
                    Tené en cuenta que si cambiás tus preferencias, se guardarán solo en este navegador. Es probable que vuelvas a ver nuestro aviso de uso de cookies si cambiás de navegador o de dispositivo.
                </p>
                <div>
                    <p>
                        También podés administrar el uso de cookies desde el navegador que usás habitualmente:
                    </p>
                    <ul className="pl-10 list-disc underline">
                        <li>
                            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=es-419" target={"_blank"}>
                                Google Chrome
                            </a>
                        </li>
                        <li>
                            <a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" target={"_blank"}>
                                Mozilla Firefox
                            </a>
                        </li>
                        <li>
                            <a href="https://support.apple.com/es-lamr/guide/safari/sfri11471/mac" target={"_blank"}>
                                Safari
                            </a>
                        </li>
                        <li>
                            <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target={"_blank"}>
                                Internet Explorer
                            </a>
                        </li>
                        <li>
                            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target={"_blank"}>
                                Microsoft Edge
                            </a>
                        </li>
                        <li>
                            <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target={"_blank"}>
                                Opera
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Si desactivás ciertas cookies, es posible que no puedas usar algunas funcionalidades mi sitio web.
                </p>
            </div>
        </div>
    )
}