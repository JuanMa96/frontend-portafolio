export function Footer(){
    return(
    <footer className=" bg-cyan-400 dark:bg-slate-800 dark:text-white grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 justify-items-center items-center p-3 gap-3">
        <article className="grid col-span-1 row-span-2 grid-rows-2 grid-rows-[subgrid] justify-items-center items-center">
            <h3 className="text-xl text-center">Links</h3>
            <ul className="flex flex-col items-center gap-3">
                <li>
                    <a href="tel:3794870926">
                        <span className="icon-phone align-middle"> </span>+54 3794870926
                    </a>
                </li>
                <li>
                    <a href="email:juanmaninc@gmail.com">
                        <span className="icon-envelope align-middle"> </span>juanmaninc@gmail.com
                    </a>
                </li>
            </ul>
        </article>
        <article className="grid col-span-1 row-span-2 grid-rows-2 grid-rows-[subgrid] justify-items-center items-center">
            <h3 className="text-xl text-center">
                Social media
            </h3>
            <ul>
                <li>
                    <a href="https://www.instagram.com/juan_mancedo"><span className="icon-instagram align-middle"> </span>Instagram</a>
                </li>
            </ul>
        </article>
        <article className="grid col-span-1 row-span-2 grid-rows-2 grid-rows-[subgrid] justify-items-center items-center">
            <h3 className="text-xl text-center">
                Address
            </h3>
            <address>
                1234 Main St.
                <br />
                Anytown, USA 12345
            </address>
        </article>
        <div className="col-span-1 md:col-span-3">
            <h2 className="font-mono text-3xl text-center">Markdown</h2>
            <p>Una pagina hecha por <a href=""><span className="icon-instagram align-middle"> </span> @Juanma_Blogs</a></p>    
        </div>
    </footer>
    )
}