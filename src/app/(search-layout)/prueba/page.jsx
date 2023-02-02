import { Posts } from "@/components/posts"
import { ButtonOfPagination } from "@/components/ButtonOfPagination"
const qs = require("qs")

export async function getSearch(_page = 1, _limit, _query) {
    let stringifiedQuery;
    if(_query != undefined){
        const query = {
            or: [
               {
                    title: {
                        like: _query
                    }
                },
                {
                    description:{
                        like: _query
                    }
                } 
            ]
        };


        stringifiedQuery = qs.stringify({
            where: query,
            limit: _limit,
            page: _page,
            sort: "-createdAt"
        }, { addQueryPrefix: true });
    
    }else{
        stringifiedQuery = qs.stringify({
            limit: _limit,
            page: _page,
            sort: "-createdAt"
        }, { addQueryPrefix: true });

    }

    let response = await fetch(`http://localhost:3000/api/posts${stringifiedQuery}`, {cache: "no-store"});
    console.log(`http://localhost:3000/api/posts${stringifiedQuery}`)
    response = await response.json();

    response.query = {
        limit: _limit,
        page: parseInt(_page),
        sort: "-createdAt"
    }

    _query != undefined? response.query.search = _query: null

    return response
}

export default async function ListPage({searchParams}){
    const {search, page} = searchParams
   
    const res = await getSearch(page, 6, search)

    return(
        <main>
            <div>
            <Posts docs={res.docs} />
            <ButtonOfPagination page={page} totalPages={res.totalPages} query={res.query} link={`/prueba`} />
        </div>
        </main>
    )
}