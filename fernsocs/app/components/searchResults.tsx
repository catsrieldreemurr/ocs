"use client"
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import PopupWindow from "./window";

interface setProps{
    results: any[]
    resultsIsOpen: boolean
    
    setOpen: Dispatch<SetStateAction<boolean>>
    setResultOpen: Dispatch<SetStateAction<boolean>>
}

export default function SearchResultsWindow({results, setOpen, setResultOpen, resultsIsOpen}:setProps){
    const [popupIndex, setPopupIndex] = useState(0)
    function closeWindow(){
        setOpen(false)
    }

    function handleClick(index:number){
        setResultOpen(true)
        setPopupIndex(index)
    }
    return(
        <div className="w-[95%] sm:w-[80%] rounded-xl text-black p-5 fixed top-1/2 -translate-y-1/2 shadow-lg z-100 bg-white left-1/2 -translate-x-1/2 transform h-[90%] overflow-scroll">
            {resultsIsOpen === true && <PopupWindow charactersData={results} currentIndex={popupIndex} setOpen={setResultOpen}></PopupWindow>}
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Search Results</h2>
                <button className="p-5 hover:bg-gray-300 rounded-2xl text-3xl font-bold text-shadow-lg text-shadow-red-300" onClick={closeWindow}>Close</button>
            </div>

            <div className="flex flex-col items-center">{results.length <= 0 && <p className="text-2xl">No results found</p>}{results.map((character, index) => (
                <div key={index} onClick={() => handleClick(index)} className="flex gap-20 items-center mt-10 bg-black/75 w-[90%] sm:w-[50%] p-5 rounded-2xl transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 " >
                    <div className="flex">
                        <Image className="object-cover w-[150px] h-[150px] sm:w-[300] sm:h-[300px] rounded-xl" src={character.descriptions.imageURL} alt={character.descriptions.imageAlt} width={1000} height={1000} quality={75}></Image>
                    </div>

                    <div className="text-white">
                        <h1 className="text-3xl font-bold">{character.characterProfile.fullName}</h1>
                        <h2 className="text-xl">{character.universeInfo.mainUniverse}</h2>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}