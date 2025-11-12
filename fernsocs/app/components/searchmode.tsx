import React, { Dispatch, SetStateAction } from "react";

const buttonClass = "p-2 rounded-sm hover:bg-gray-300 dark:hover:bg-zinc-900";

interface settypes{
    setSearchSelect: Dispatch<SetStateAction<string>>
    searchSelect: string
}

export default function SearchOptions({setSearchSelect, searchSelect}:settypes ){
    function handleClick(tag:string){
        setSearchSelect(tag)
    }
    return(
    <div className="flex gap-5 p-5 m-5 flex-col sm:flex-row">
        <button className="p-2 font-bold">What to search?</button>
        <button className={`${buttonClass} ${searchSelect == "tag" && "bg-gray-400"}`} onClick={() => handleClick("tag")}>#Tag</button>
        <button className={`${buttonClass} ${searchSelect == "name" && "bg-gray-400"}`} onClick={() => handleClick("name")}>'Name'</button>
        <button className={`${buttonClass} ${searchSelect == "category" && "bg-gray-400"}`} onClick={() => handleClick("category")}>(Category)</button>
        <button className={`${buttonClass} ${searchSelect == "universe" && "bg-gray-400"}`} onClick={() => handleClick("universe")}>Universe</button>
    </div>
    )
}