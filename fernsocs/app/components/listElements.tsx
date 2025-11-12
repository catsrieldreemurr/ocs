"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import * as CharacterTypes from "../types/characterTypes"
import PopupWindow from "./window";
import FetchCharacters from "./fetchCharacter";

export default function SetList({charactersData}:CharacterTypes.setListProps){
    const [windowIsOpen, setWindowOpen] = useState(false);
    const [currentIndex, setIndex] = useState(Number);
    const [characters, setCharacters] = useState<any[]>([])
    
    useEffect(()=>{
        FetchCharacters().then(setCharacters)
    })

    function handleClick(index:number){
        setWindowOpen(!windowIsOpen)
        setIndex(index);
    }

    return(    
            <div className="flex flex-col gap-6 w-full justify-center items-center">
                {windowIsOpen && <PopupWindow charactersData={characters} currentIndex={currentIndex} setOpen={setWindowOpen}></PopupWindow>}
                {characters.map((character: CharacterTypes.Character, index:number) => (
                    <div key={index} onClick={() => handleClick(index)}  className="flex gap-20 items-center mt-10 bg-black/75 w-[90%] sm:w-[50%] p-5 rounded-2xl transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110" >
                        <div className="flex">
                            <Image className="object-cover w-[150px] h-[150px] sm:w-[300] sm:h-[300px] rounded-xl" src={character.descriptions.imageURL} alt={character.descriptions.imageAlt} width={1000} height={1000} quality={75}></Image>
                        </div>

                        <div className="text-white dark:text-black">
                            <h1 className="text-3xl font-bold">{character.characterProfile.fullName}</h1>
                            <h2 className="text-xl">{character.universeInfo.mainUniverse}</h2>
                        </div>
                    </div>
                ))}
            </div>
        
    )
}