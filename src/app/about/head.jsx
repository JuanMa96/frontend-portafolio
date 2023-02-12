import { DefaultTags } from "@/components/DefaultTags"

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>JM | About</title>
      <meta name="description" content="Desarrollador web frontend - JM" />
      
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_LOCALURL}about`} />            

      <meta property="og:title" content="JM portafio" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_LOCALURL}img/cover.jpg`} />
      <meta property="og:description" content="Desarrollador web frontend - JM" />
      <meta name="twitter:title" content="JM portafolio" />
      <meta name="twitter:description" content="Desarrollador web frontend - JM" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_LOCALURL}img/cover.jpg`} />
      <meta name="twitter:image:alt" content="Mackbook mostrando una página web" />
    </>
  )
}

  