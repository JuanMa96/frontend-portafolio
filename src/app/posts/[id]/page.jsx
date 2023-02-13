import React, { Fragment } from 'react';
import { Text } from 'slate';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic'
export function serialize(content, parent = "noLi"){
  return content.map((node, i) => {
        if (Text.isText(node)) { 
          let text = <span>{node.text}</span> 
        
            if (node.bold) {
              text = (
                <strong key={i}>
                  {text}
                </strong>
              );
            }
        
            if (node.code) {
              text = (
                <code key={i}>
                  {text}
                </code>
              );
            }
        
            if (node.italic) {
              text = (
                <em key={i}>
                  {text}
                </em>
              );
            }
        
            if(node.underline){
              text = (
                <span key={i} className='underline'>
                  {text}
                </span>
              )
            }

            if(node.strikethrough){
              text =(
                <span key={i} className='line-through'>
                  {text}
                </span>
              )
            }
           
            if(node.text.trim() == ""){
              return(
                <Fragment key={i}>
                  <br />
                </Fragment>
              )
            }

            return (
              <Fragment key={i}>
                {text}
              </Fragment>
            );
        }

        if (!node) {
            return null;
        }
        
        switch (node.type) {
            case 'h1':
              return (
                <h1 key={i} className="text-4xl">
                  {serialize(node.children)}
                </h1>
              );
            case 'h2':
                return (
                  <h2 key={i} className="text-3xl">
                    {serialize(node.children)}
                  </h2>
                );
            case 'h3':
                return (
                  <h3 key={i} className="text-2xl">
                    {serialize(node.children)}
                  </h3>
                );
            case 'h4':
                return (
                  <h4 key={i} className="text-xl">
                    {serialize(node.children)}
                  </h4>
                );
            case 'h5':
                return (
                  <h5 key={i} className="text-lg">
                    {serialize(node.children)}
                  </h5>
                );
            case 'h6':
              return (
                <h6 key={i} className="text-base">
                  {serialize(node.children)}
                </h6>
              );
            case "upload":
              return(
                <div className='flex justify-center items-center'>
                  <div className='basis-full md:basis-1/2 lg:basis-1/3'>
                    <Image  key={i}
                        src={node.value.url}
                        width={node.value.width}
                        height={node.value.height}
                        alt={node.value.alt}
                        sizes="(max-size: 639px) 100vw,
                               (max-size: 767px) 50vw,
                               33vw"
                        className='w-full h-auto'
                    />
                  </div>
                </div>
              );
            case 'quote':
              return (
                <blockquote key={i}>
                  {serialize(node.children)}
                </blockquote>
              );
            case 'ul':
              return (
                <ul key={i} className="list-disc list-inside pl-16">
                  {serialize(node.children)}
                </ul>
              );
            case 'ol':
              return (
                <ol key={i} className="list-decimal list-inside w-full">
                  {serialize(node.children)}
                </ol>
              );
            case 'li':
              
              return (
                <li key={i} className="w-full">
                  {serialize(node.children, "li")}
                </li>
              );
            case 'link':
              return (
                <Link
                  href={node.url}
                  key={i}
                  target={node.newTab? "_blank": ""}
                >
                  {serialize(node.children)}
                </Link>
              );
            case "indent":
              return(
                <span key={i} className='inline-block pl-16 w-full'>{serialize(node.children)}</span>
              )
            default:
              if(parent === "li"){
                return (
                  <span key={i}>
                    {serialize(node.children)}
                  </span>
                )
              }
              return (
                <p key={i}>
                  {serialize(node.children)}
                </p>
              );
        }
    })

}

export async function getPost(id){
    let result = await fetch(`${process.env.PAYLOAD_URL}/api/posts/${id}`, {cache: "no-store"})
    result = await result.json()
    return result
}

export default async function proyect({params}){
    const post = await getPost(params.id)
  
    if(post.errors){
      return <p>No se encontró el post</p>
    }

    return (
        <div  className='p-3'>
          <main className='container mx-auto p-3 bg-white dark:bg-slate-800 shadow-xl rounded-2xl'>
              {serialize(post.content)}
          </main>    
        </div>  
    )
}
