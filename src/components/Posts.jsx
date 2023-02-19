import Image from 'next/image';
import Link from 'next/link';
  
  // This is an async Server Component
  export async function Posts({docs}) {

    console.log(docs.length == 0)
    if(docs.length == 0){
        return(
            <p>No se encontraron posts</p>
        )
    }else{
        return (
        <>    
            {docs.map((post)=>(
                <article key={post.id} className=" bg-white border-slate-800 dark:bg-slate-800 dark:border-white border-4 rounded-xl shadow-xl flex flex-col items-center justify-between gap-3">
                    <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
                        <Image src={post.image.url}
                            width={post.image.width}
                            height={post.image.height}
                            alt={post.image.alt}
                            sizes="(max-size: 639px) 100vw,
                               (max-size: 767px) 50vw,
                               33vw"
                            />        
                    </Link>
                    <h2 className='text-slate-900 dark:text-white text-2xl px-3'>{post.title}</h2>
                    <p className='text-slate-500 dark:text-slate-400 px-3'>
                        {post.description}
                    </p>
                    <div className='pb-3'>
                        <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`} className="py-1 px-3 text-center bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white">
                            Ver más
                        </Link>
                    </div>
                </article>
            ))}
        </>
        );
    }  
  }