"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const qs = require("qs")

export function Search(){
  const [value, setValue] = useState("hola")
  const router = useRouter()

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(value.trim() != ""){

      const stringifiedQuery = qs.stringify({
        search: value,
        limit: 6,
        sort: "-createdAt"
      }, { addQueryPrefix: true });

      router.push(`/prueba${stringifiedQuery}`)
    }

    
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