import { getSearch } from "@/app/posts/page"

export default async function handler(req, res) {

    const siteMap = await generateSiteMap()

    res.setHeader("Content-Type", "text/xml")

    res.status(200)
    res.write(siteMap)
    res.end()
}
  
function addZeros(n){
  if(n.toString().length < 2) return "0".concat(n)
  return n;
}

function formatDate(date){
    return date.getFullYear() + "-" + (addZeros(date.getMonth()+1)) + "-" + addZeros(date.getDate())
}

async function generateSiteMap(){
    const {docs} = await getSearch(1, 0)


    return`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/</loc>
        <lastmod>2023-02-13</lastmod>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/about</loc>
        <lastmod>2023-02-13</lastmod>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/posts</loc>
        <lastmod>2023-02-13</lastmod>
      </url>
      ${docs.map(post=>{
        return`
        <url>
            <loc>${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/posts/${post.id}</loc>
            <lastmod>${formatDate(new Date(post.updatedAt))}</lastmod>
        </url>
        `
      }).join("")}
    </urlset>
        `
}