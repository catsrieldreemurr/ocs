"use client"
import Image from "next/image";
import React from "react";

interface characterProfile{
    fullName: string;
    gender: string;
    pronouns: string;
    age: string;
    height: string;
    weight: string;
    birthday: string;
}

interface universeInfo{
    mainUniverse: string;
    otherUniverses?: string[];
}

interface characterSkills{
    abilities?: string[];
    skills?: string[];
    weaknesses: string[];
    strengths: string[];
}

interface descriptions{
    appearanceDescription: string;
    clothingDescription: string;
    personalitySummary: string;
    imageURL: string;
    imageAlt: string;
}

interface storyInfo{
    backstory: string;
    occupation: string;
}

interface metaInfo{
    creatorNotes?: string[];
    tags: string[];
    creationDate: string;
    category: string;
}

interface Character{
    characterProfile: characterProfile;
    universeInfo: universeInfo;
    characterSkills: characterSkills;
    descriptions: descriptions;
    storyInfo: storyInfo;
    metaInfo: metaInfo;
}

interface setListProps{
    charactersData: Character[]
}

export default function SetList({charactersData}:setListProps){

    function handleClick(){

    }   

    return(    
            <div className="flex flex-col gap-6 w-full justify-center">
                {charactersData.map((character: Character, index:number) => (
                    <div key={index} className="flex gap-20 items-center mt-10 ">
                        <div className="flex w-50 h-50">
                            <Image className="object-cover w-50 h-50" src={character.descriptions.imageURL} alt={character.descriptions.imageAlt} width={1000} height={100} quality={75}></Image>
                        </div>
                        <h1 className="text-2xl font-bold">{character.characterProfile.fullName}</h1>
                    </div>
                ))}
            </div>
        
    )
}