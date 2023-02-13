import Image from "next/image"

export const dynamic = 'force-static'
export default function aboutPage(){
    return(
    <main className='min-h-[calc(100vh-56px)] container mx-auto px-3 py-7 grid grid-cols-4 gap-3 text-white'>
        <h1 className="col-span-4 text-5xl md:text-7xl lg:text-8xl font-serif text-center">About</h1>
        <div className="col-span-4 md:col-span-2 h-full flex flex-col px-3 py-7 gap-3 shadow-xl rounded-2xl justify-between">
            <p>
                Hola, soy Juan María Mancedo, un desarrollador frontend. Soy de Argentina, tengo 18 años.  Además de este oficio me gusta el modelaje, el mundo fitness, la música, etc.
            </p>
            <p>
                Cuento con  diversos proyectos personales en el rubro del desarrollo frontend que  exponen mi  capacidad, tales como: JModels, Perrolandia, JMarkdown, etc. ( los puedes ver en posts)
            </p>
            <p>
                Aquí hay algunas tecnologías con las que he estado trabajando recientemente y utilice en este sitio:
            </p>
            <ul className="list-disc list-inside">
                <div className="flex gap-3">
                    <div>
                        <li>Javascript (ES6+)</li>
                        <li>React js</li>
                        <li>Next js</li>
                    </div>
                    <div>
                        <li>Astro js</li>
                        <li>Tailwind css</li>
                        <li>Payload cms</li>
                    </div>
                </div>
            </ul>
        </div>
        <div className="col-span-4 md:col-span-2 flex justify-center">
            <div className="md:basis-full lg:basis-1/2">
                <Image src={"/perfil.png"} width={720} height={720} alt="Imagen de perfil de Juan María Mancedo" className="transition-[filter] grayscale-0 hover:grayscale dark:grayscale hover:dark:grayscale-0"/>
            </div>
        </div>
    </main>
    )
}