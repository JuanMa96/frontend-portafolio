import { GoogleTags } from "./googleTags"
export function DefaultTags(){
    return(
        <>
            <GoogleTags />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta lang="es"/>
            <link rel="icon" href={`${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/favicon.ico`} />   
                
            <meta name="author" content="Juan María Mancedo" />
            <meta name="distribution" content="global" />
            <meta name="MobileOptimized" content="width" />
            <meta name="HandheldFriendly" content="true" />        
            <meta name="theme-color" content="#1e3a8a" />
            <meta property="og:type" content="website" />
            <meta property="og:locate-alternate" content="es_ES" />
            <meta name="twitter:card" content="summary" />
        </>
    )
}