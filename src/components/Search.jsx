"use client";

import { useState } from "react";

async function getData(page, limit) {
    let posts = await fetch(`http://localhost:3000/api/posts?limit=$0`, {cache: "no-store"})
    .then(res => res.json())

    return({
        docs: posts.docs
    })
  }

export function Search(){

    const [value, setValue] = useState("Last")

    function handleChange(event){
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit} className="pt-14">
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}