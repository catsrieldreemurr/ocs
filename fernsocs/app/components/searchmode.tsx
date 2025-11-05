import React from "react";

const buttonClass = "p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-zinc-900";

export default function SearchOptions(){
    return(
    <div className="flex gap-5 p-5 m-5 flex-col sm:flex-row">
        <p className="p-2 font-bold">What to search?</p>
        <button className={buttonClass}>#Tag</button>
        <button className={buttonClass}>'Name'</button>
        <button className={buttonClass}>(Category)</button>
        <button className={buttonClass}>Universe</button>
    </div>
    )
}