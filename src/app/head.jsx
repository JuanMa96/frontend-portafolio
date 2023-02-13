import { DefaultTags } from "@/components/DefaultTags"

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>JM | Home</title>
      <meta name="description" content="Desarrollador web frontend - JM" />
      
      <meta property="og:url" content={process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS} />            

      <meta property="og:title" content="JM portaflio" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/img/cover.jpg`} />
      <meta property="og:description" content="Desarrollador web frontend - JM" />
      <meta name="twitter:title" content="JM portafolio" />
      <meta name="twitter:description" content="Desarrollador web frontend - JM" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC__PUBLIC_BASE_DNS}/img/cover.jpg`} />
      <meta name="twitter:image:alt" content="Mackbook mostrando una página web" />
    </>
  )
}
