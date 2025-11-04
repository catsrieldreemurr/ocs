"use client"
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
    imageName: string;
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
    return(    
            charactersData.map((character: Character, index:number) => (
                <div className="bg-black/50 p-5 m-5 rounded-lg text-white" key={index}>
                    <h1 className="text-2xl font-bold">{character.characterProfile.fullName}</h1>
                </div>
            )
        )
    )
}