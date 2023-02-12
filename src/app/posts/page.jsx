import { Search } from "@/components/Search";
import { Posts } from "@/components/Posts"
import { ButtonOfPagination } from "@/components/ButtonOfPagination"
const qs = require("qs")

export async function getSearch(_page = 1, _limit = 6, _query) {
    let query;
    if(_query != undefined){
        query = {
            and: [
                {
                    status: {
                        equals: "published"
                    }
                },
                {
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
                }
            ]
        };

    
    }else{
        query = {
            and: [
                {
                    status: {
                        equals: "published"
                    }
                }
            ]
        };
 
    }

    let stringifiedQuery = qs.stringify({
        where: query,
        limit: _limit,
        page: _page,
        sort: "-createdAt"
    }, { addQueryPrefix: true });
    let response = await fetch(`${process.env.PAYLOADURL}api/posts${stringifiedQuery}`, {cache: "no-store"});
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
            <div className='container mx-auto px-3 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <Search />
                <Posts docs={res.docs} />
                <ButtonOfPagination page={page} totalPages={res.totalPages} query={res.query} link={`/posts`} />
            </div>
        </div>
        </main>
    )
}