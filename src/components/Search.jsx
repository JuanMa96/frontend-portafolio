"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export function Search(){
  const [value, setValue] = useState("hola")
  const router = useRouter()

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    value.trim() == ""? router.push(`/list/1`): router.push(`/search/${value.trim().replaceAll(" ", "-")}/1`)
    event.preventDefault();
  }

    return (
      <form onSubmit={handleSubmit} className="pt-14">
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}