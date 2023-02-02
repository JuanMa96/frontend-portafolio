import { Posts } from "@/components/posts"
import { ButtonOfPagination } from "@/components/ButtonOfPagination"

async function getData(page, limit) {
    let posts = await fetch(`http://localhost:3000/api/posts?page=${page}&limit=${limit}&sort=-createdAt`, {cache: "no-store"})
    .then(res => res.json())

    return({
        docs: posts.docs
    })
  }

export default async function ListPage({params}){
    const res = await getData(params.page, 6)
    return(
        <main>
            <div>
            <Posts docs={res.docs} />
            <ButtonOfPagination page={params.page} totalPages={res.totalPages} link={`/list`} />
        </div>
        </main>

    )
}