import Script from "next/script"

export function GoogleTags(){
    return(
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N3F42FCL56" />
            <Script src="/scripts/googleAnalytics.js" />
        </>
    )
}