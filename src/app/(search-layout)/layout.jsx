import { Search } from "@/components/Search"

export default function layoutOflistPosts ({children}){

    return(
        <div>
        <Search />
        {children}
        </div>
    )
}