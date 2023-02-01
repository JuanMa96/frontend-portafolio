"use client"
import { useRouter } from "next/navigation"

export function ButtonOfPagination({totalPages, page, link}){
    const router = useRouter()

    const prevPage = String(parseInt(page) - 1) 
    const nextPage = String(parseInt(page) + 1)

    return(
        <div>
            Primera: {page != 1? <input type="button" value={1} onClick={()=>router.push(`${link}/1`)} />: null}
            Anterior: {(page > 2)? <input type="button" value={prevPage} onClick={()=>router.push(`${link}/${prevPage}`)} />: null}
            Actual: <input type="button" value={page}/>
            Seguiente: {page < totalPages - 1? <button onClick={()=>router.push(`${link}/${nextPage}`)} >{nextPage}</button>: null}
            Última: {page != totalPages? <input type="button" value={totalPages} onClick={()=>router.push(`${link}/${totalPages}`)} />: null}
        </div>
    )
}

/*

*/ 