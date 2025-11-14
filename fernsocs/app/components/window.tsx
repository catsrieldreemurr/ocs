import { Dispatch, SetStateAction } from "react";
import * as CharacterTypes from "../types/characterTypes"
import CharacterTags from "./listTags";
import Image from "next/image";
import InfoBox from "./infoBox";
import CreatorNotes from "./getCreatorNotes";
import GetSkills from "./getSkills";
import CharacterProfileInformation from "./characterInfo";

interface setProps{
    charactersData:CharacterTypes.Character[];
    currentIndex:number;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function PopupWindow({charactersData, currentIndex, setOpen}:setProps){
    return(
        <div className="w-[95%] sm:w-[80%] rounded-xl text-black p-5 fixed top-1/2 -translate-y-1/2 shadow-md/5 z-100 bg-white left-1/2 -translate-x-1/2 transform h-[90%] overflow-scroll">
            <CharacterProfileInformation charactersData={charactersData} currentIndex={currentIndex} setOpen={setOpen}></CharacterProfileInformation>
        </div>
    )
}