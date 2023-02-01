import Image from 'next/image';
import Link from 'next/link';
  
  // This is an async Server Component
  export async function Posts({docs}) {

    return (
        docs.map((post)=>(
            <article key={post.id}>
                <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
                    <Image src={post.image.sizes.card.url}
                        width={post.image.sizes.card.width}
                        height={post.image.sizes.card.height}
                        alt="a"
                    />        
                </Link>
                        
                <h2>{post.title}</h2>
                <p>
                    {post.description}
                </p>
                <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
                    Click me
                </Link>
                
            </article>
        ))
    );
  }