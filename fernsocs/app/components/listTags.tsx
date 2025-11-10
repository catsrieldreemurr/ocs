import * as CharacterTypes from "../types/characterTypes";

interface setListProps{
        tags: string[]
}

export default function CharacterTags({tags}:setListProps){
    return(
        <div className="flex gap-5">
            {tags.map((tag, Index) => (
                <p key={Index} className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300">{tag}</p>
            ))}
        </div>
    )
}