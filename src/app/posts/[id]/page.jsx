import React, { Fragment } from 'react';
import { Text } from 'slate';
import Link from 'next/link';
import Image from 'next/image';
import head from 'next/head';

export function serialize(content){
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
        
            // Handle other leaf types here...
        
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
                <h1 key={i}>
                  {serialize(node.children)}
                </h1>
              );
            case 'h2':
                return (
                  <h2 key={i}>
                    {serialize(node.children)}
                  </h2>
                );
            case 'h3':
                return (
                  <h3 key={i}>
                    {serialize(node.children)}
                  </h3>
                );
            case 'h4':
                return (
                  <h4 key={i}>
                    {serialize(node.children)}
                  </h4>
                );
            case 'h5':
                return (
                  <h5 key={i}>
                    {serialize(node.children)}
                  </h5>
                );
            case 'h6':
              return (
                <h6 key={i}>
                  {serialize(node.children)}
                </h6>
              );
            case "upload":
              return(
                <Image  key={i}
                        src={node.value.sizes.tablet.url}
                        width={node.value.sizes.tablet.width}
                        height={node.value.sizes.tablet.height}
                    />
              );
            case 'quote':
              return (
                <blockquote key={i}>
                  {serialize(node.children)}
                </blockquote>
              );
            case 'ul':
              return (
                <ul key={i}>
                  {serialize(node.children)}
                </ul>
              );
            case 'ol':
              return (
                <ol key={i}>
                  {serialize(node.children)}
                </ol>
              );
            case 'li':
              return (
                <li key={i}>
                  {serialize(node.children)}
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
        
            default:
              return (
                <p key={i}>
                  {serialize(node.children)}
                </p>
              );
        }
    })

}

async function getPost(id){
    let result = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: "no-cache"})
    result = await result.json()
    return result
}

export default async function proyect({params}){
    const {id} = params
    const post = await getPost(id)
  
    if(post.errors){
      return <p>No se encontró el post</p>
    }

    return (
        
        <main className="pt-14">
            {serialize(post.content)}
        </main>
 
      
     
    )
}