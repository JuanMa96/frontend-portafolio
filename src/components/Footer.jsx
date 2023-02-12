import Link from "next/link";

export function Footer(){
    return(
    <footer className=" bg-cyan-400 dark:bg-slate-800 dark:text-white grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 justify-items-center items-center p-3 gap-3">
        <article className="grid col-span-1 row-span-2 grid-rows-2 grid-rows-[subgrid] justify-items-center items-center">
            <h3 className="text-xl text-center">Links</h3>
            <ul className="flex flex-col items-center gap-3">
                <li>
                    <Link href="tel:3794870926">
                        <span className="before:align-middle before:font-icons before:content-['d']"> +54 3794870926</span>
                    </Link>
                </li>
                <li>
                    <Link href="email:juanmaninc@gmail.com">
                        <span className="before:align-middle before:font-icons before:content-['e']"> juanmaninc@gmail.com</span>
                    </Link>
                </li>
            </ul>
        </article>
        <article className="grid col-span-1 row-span-2 grid-rows-2 grid-rows-[subgrid] justify-items-center items-center">
            <h3 className="text-xl text-center">
                Social media
            </h3>
            <ul>
                <li>
                    <Link href="https://www.instagram.com/juan_mancedo">
                        <span className="before:align-middle before:font-icons before:content-['a']"> Instagram</span>
                    </Link>
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
            <h2 className="font-mono text-3xl text-center">JM</h2>
            <p>Una pagina hecha por <Link href="https://www.instagram.com/juanma_blogs">
                                        <span className="before:align-middle before:font-icons before:content-['a']"> @Juanma_Blogs</span>
                                    </Link>
            </p>    
        </div>
    </footer>
    )
}