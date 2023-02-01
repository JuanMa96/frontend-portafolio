import { ButtonOfPagination } from "@/components/ButtonOfPagination";
import { Posts } from "@/components/posts";
const qs = require("qs")


export default async function SearchPage({params}){

    const res = await getPosts(params.search, params.page)
    
    return(
        <div>
            <Posts docs={res.docs} />
            <ButtonOfPagination page={params.page} totalPages={res.totalPages} link={`/search/${params.search}`} />
        </div>
    )
}

async function getPosts(_query, page) {
    const query = {
        title: {
            like: _query
        }
    };

    const stringifiedQuery = qs.stringify({
        where: query,
        limit: 6,
        page
    }, { addQueryPrefix: true });

    console.log(`http://localhost:3000/api/posts${stringifiedQuery}`)
    let response = await fetch(`http://localhost:3000/api/posts${stringifiedQuery}`, {cache: "no-store"});
    response = await response.json();

    return response;
}
  
  