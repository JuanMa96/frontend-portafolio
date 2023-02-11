"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
const qs = require("qs")

const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export function Search({limit = 6}){
  const [value, setValue] = useState("")
  const prevValue = usePreviousValue(value)
  const router = useRouter()

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(value.trim() != ""){
      if(value != prevValue){
        const stringifiedQuery = qs.stringify({
          search: value,
          limit: limit,
          sort: "-createdAt"
        }, { addQueryPrefix: true });
  
        router.replace(`/posts${stringifiedQuery}`)
      }
    }else{
      router.replace("posts")
    }

    
  }

    return (
      <div className="col-span-full">
        <form onSubmit={handleSubmit} className="flex justify-center md:justify-start">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 flex gap-3">
            <input type="text" value={value} onChange={handleChange} className="basis-3/4 dark:bg-slate-800 rounded-xl shadow-sm shadow-slate-200 dark:shadow-white"/>
            <input type="submit" value="Submit" className="basis-1/4 bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white"/>
          </div>
        </form>
      </div>
    );
}