import Link from "next/link"

export function Main(){
    return(
        <main className='min-h-[calc(100vh-56px)] container mx-auto px-3 py-7 flex justify-center items-center text-white'>
            <div className="basis-full flex flex-col gap-6 shadow-xl rounded-2xl p-3">
                <p className="text-lg">Hola, mi nombre es...</p>
                <div className="">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif">Juan María Mancedo</h1>
                    <p className="text-5xl md:text-7xl lg:text-8xl">Y hago páginas increíbles</p>
                </div>
                <p className="text-lg w-full md:w-3/4 lg:w-1/2">Soy un desarrollador frontend junior que se dedica a crear páginas webs increíbles. Una de las tecnologías que más me gustan y que utilice para este sitio es Next.js</p>
                <Link href="https://wa.me/543794870926?text=Hola,%20necesito%20un%20desarrollador%20web" target="_blank" className="self-center bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white py-1 px-3">Contactame</Link>
            </div>
        </main>
    )
}