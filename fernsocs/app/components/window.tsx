import { Dispatch, SetStateAction } from "react";
import * as CharacterTypes from "../types/characterTypes"
import Image from "next/image";
import SetList from "./listElements";
import CharacterTags from "./listTags";

interface setProps{
    charactersData:CharacterTypes.Character[];
    currentIndex:number;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function PopupWindow({charactersData, currentIndex, setOpen}:setProps){
    const character = charactersData[currentIndex];
    return(
        <div className="w-[95%] sm:w-[80%] rounded-xl text-black p-5 fixed top-1/2 -translate-y-1/2 shadow-md/5 z-100 bg-white left-1/2 -translate-x-1/2 transform h-[90%]">
            <div className="flex items-center justify-between">
                <div className="sm:flex items-center gap-10">
                    <h1 className="text-4xl font-bold">{character.characterProfile.fullName}</h1>
                    <h2 className="text-2xl">{character.characterProfile.gender} ({character.characterProfile.pronouns})</h2>
                </div>
                <button onClick={() => {setOpen(false)}} className="p-5 hover:bg-gray-300 rounded-2xl text-3xl font-bold text-shadow-lg text-shadow-red-300">Close</button>
            </div>
            <CharacterTags tags={charactersData[currentIndex].metaInfo.tags}></CharacterTags>
        </div>
    )
}