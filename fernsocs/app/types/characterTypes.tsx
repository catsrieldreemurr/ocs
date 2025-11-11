export interface characterProfile{
    fullName: string;
    gender: string;
    pronouns: string;
    age: string;
    height: string;
    weight: string;
    birthday: string;
}

export interface universeInfo{
    mainUniverse: string;
    otherUniverses?: string[];
}

export interface characterSkills{
    abilities?: string[];
    skills?: string[];
    weaknesses: string[];
    strengths: string[];
}

export interface descriptions{
    appearanceDescription: string;
    clothingDescription: string;
    personalitySummary: string;
    imageURL: string;
    imageAlt: string;
}

export interface storyInfo{
    backstory: string;
    occupation: string;
}

export interface metaInfo{
    creatorNotes?: string[];
    tags: string[];
    creationDate: string;
    category: string;
}

export interface Character{
    characterProfile: characterProfile;
    universeInfo: universeInfo;
    characterSkills: characterSkills;
    descriptions: descriptions;
    storyInfo: storyInfo;
    metaInfo: metaInfo;
}

export interface setListProps{
    charactersData: Character[]
}