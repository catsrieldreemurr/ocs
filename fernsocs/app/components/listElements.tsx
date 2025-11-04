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
            charactersData.map((character: Character, index:number) => (
                <div key={index}>
                    <h1 className="text-2xl font-bold">{character.characterProfile.fullName}</h1>
                    <Image className="object-cover h-[250px] w-[250px]" src={character.descriptions.imageURL} alt={character.descriptions.imageAlt} width={250} height={250} quality={100}></Image>
                </div>
            )
        )
    )
}