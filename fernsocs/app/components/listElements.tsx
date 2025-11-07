"use client"
import Image from "next/image";
import React from "react";
import * as CharacterTypes from "../types/characterTypes"
import PopupWindow from "./window";

export default function SetList({charactersData}:CharacterTypes.setListProps){

    function handleClick(){
        
    }   

    return(    
            <div className="flex flex-col gap-6 w-full justify-center items-center">
                {charactersData.map((character: CharacterTypes.Character, index:number) => (
                    <div key={index} className="flex gap-20 items-center mt-10 bg-black/75 w-[90%] sm:w-[50%] p-5 rounded-2xl transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 ">
                        <div className="flex">
                            <Image className="object-cover w-[150px] h-[150px] sm:w-[300] sm:h-[300px] rounded-xl" src={character.descriptions.imageURL} alt={character.descriptions.imageAlt} width={1000} height={1000} quality={75}></Image>
                        </div>

                        <PopupWindow charactersData={charactersData}></PopupWindow>
                        <div className="text-white dark:text-black">
                            <h1 className="text-3xl font-bold">{character.characterProfile.fullName}</h1>
                            <h2 className="text-xl">{character.universeInfo.mainUniverse}</h2>
                        </div>
                    </div>
                ))}
            </div>
        
    )
}