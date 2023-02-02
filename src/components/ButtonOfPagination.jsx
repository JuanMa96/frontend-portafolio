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

        router.push(`${link}${stringifiedQuery}`)

    }

    useEffect(()=>{
        window.scroll(0, 0)
    })

    return(
        <div>
            Primera: {query.page != 1? <input type="button" value={1} onClick={()=>switchPage("first")} />: null}
            Anterior: {(query.page > 2)? <input type="button" value={query.page - 1} onClick={()=>switchPage("before")} />: null}
            Actual: <input type="button" value={query.page}/>
            Seguiente: {query.page < totalPages - 1? <button onClick={()=>switchPage("after")} >{query.page + 1}</button>: null}
            Última: {query.page != totalPages? <input type="button" value={totalPages} onClick={()=>switchPage("last")} />: null}
        </div>
    )
}

/*

*/ 