"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const qs = require("qs")

export function ButtonOfPagination({totalPages, link, query}){
    const router = useRouter()

    function switchPage(action){
        switch(action){
            case "first":
                query.page = 1
                break;
            case "before":
                query.page -= 1
                break;
            case "after":
                query.page += 1
                break;
            case "last":
                query.page = totalPages
                break;
        }

        const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true });

        router.replace(`${link}${stringifiedQuery}`)

    }

    useEffect(()=>{
        window.scroll(0, 0)
    })

    return(
        <div className="col-span-full flex justify-center">
            <div className="basis-full md:basis-1/3  grid grid-cols-5 grid-rows-1 justify-center gap-3">
                {query.page != 1? <input type="button" value={1} onClick={()=>switchPage("first")} className="bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white py-1 px-3 col-span-1"/>: null}
                {query.page > 2? <input type="button" value={query.page - 1} onClick={()=>switchPage("before")} className="bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white py-1 px-3 col-start-2 col-end-3"/>: null} 
                <input type="button" value={query.page} className="bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white col-start-3 col-end-4"/>
                {query.page < totalPages - 1? <button onClick={()=>switchPage("after")} className="bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white py-1 px-3 col-start-4 col-end-5">{query.page + 1}</button>: null}
                {query.page != totalPages? <input type="button" value={totalPages} onClick={()=>switchPage("last")} className="bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white py-1 px-3 col-start-5 col-end-6"/>: null}
            </div>
        </div>
    )
}

/*

*/ 