import { Dispatch, SetStateAction } from "react";
import * as CharacterTypes from "../types/characterTypes"
import CharacterTags from "./listTags";
import Image from "next/image";
import InfoBox from "./infoBox";
import CreatorNotes from "./getCreatorNotes";

interface setProps{
    charactersData:CharacterTypes.Character[];
    currentIndex:number;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function PopupWindow({charactersData, currentIndex, setOpen}:setProps){
    const character = charactersData[currentIndex];
    return(
        <div className="w-[95%] sm:w-[80%] rounded-xl text-black p-5 fixed top-1/2 -translate-y-1/2 shadow-md/5 z-100 bg-white left-1/2 -translate-x-1/2 transform h-[90%] overflow-scroll">
            <div className="flex items-center justify-between">
                <div className="sm:flex items-center gap-10">
                    <h1 className="text-4xl font-bold">{character.characterProfile.fullName}</h1>
                    <h2 className="text-2xl">{character.characterProfile.gender} ({character.characterProfile.pronouns})</h2>
                </div>
                <button onClick={() => {setOpen(false)}} className="p-5 hover:bg-gray-300 rounded-2xl text-3xl font-bold text-shadow-lg text-shadow-red-300">Close</button>
            </div>
            <CharacterTags tags={character.metaInfo.tags}></CharacterTags>

            <div className="sm:flex gap-5">
                <div className="sm:w-1/2">
                    <div className="flex gap-5 items-center">
                        <Image src={character.descriptions.imageURL} height={1000} width={1000} alt={character.descriptions.imageAlt} className="sm:h-[15rem] sm:w-[15rem] h-[8rem] w-[8rem] mt-5 rounded-xl object-cover"></Image>
                        <div className="h-[100%] mt-5">
                            <h2 className="text-2xl font-bold">Character Profile</h2>
                            <p className="text-xl">Age: {character.characterProfile.age}</p>
                            <p className="text-xl">Height: {character.characterProfile.height}</p>
                            <p className="text-xl">Weight: {character.characterProfile.weight}</p>
                            <p className="text-xl">Birthday: {character.characterProfile.birthday}</p>
                            <p className="text-xl">Universe: {character.universeInfo.mainUniverse}</p>
                            <p className="text-xl">Occupation: {character.storyInfo.occupation}</p>
                        </div>
                    </div>

                    <InfoBox colors="bg-red-200">                
                        <h2 className="text-2xl font-bold">Style</h2>
                        <hr className="border-red-400 p-1"></hr>
                        <p className="text-xl">Appearance: {character.descriptions.appearanceDescription}</p>
                        <p className="text-xl">Clothing: {character.descriptions.clothingDescription}</p>
                    </InfoBox>

                    <InfoBox colors="bg-green-200">
                        <h2 className="text-2xl font-bold">Personality</h2>
                        <hr className="border-green-400 p-1"></hr>
                        <p className="text-xl">{character.descriptions.personalitySummary}</p>
                    </InfoBox>
                </div>

                <div className="sm:w-1/2">
                    <InfoBox colors="bg-blue-200 flex flex-col self-start">
                        <h2 className="text-2xl font-bold">Backstory</h2>
                        <hr className="border-blue-400 p-1"></hr>
                        <p className="text-xl">{character.storyInfo.backstory}</p>
                    </InfoBox>

                    <InfoBox variant="small" colors="bg-yellow-200">
                        <div className="flex gap-2">
                            <h3 className="text-xl font-bold">Category: </h3>
                            <p className="text-xl">{character.metaInfo.category}</p>
                        </div>

                        <div className="flex gap-2">
                            <h3 className="text-xl font-bold mt-3">Creation Date:</h3>
                            <p className="text-xl mt-3">{character.metaInfo.creationDate}</p>
                        </div>
                        <CreatorNotes notes={character.metaInfo.creatorNotes ?? []}></CreatorNotes>
                    </InfoBox>
                </div>
            </div>
        </div>
    )
}