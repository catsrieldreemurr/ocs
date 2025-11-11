import * as CharacterTypes from "../types/characterTypes";

interface setListProps{
        tags: string[]
}

export default function CharacterTags({tags}:setListProps){
    return(
        <div className="flex gap-5 flex-wrap mt-5 sm:mt-0">
            {tags.map((tag, Index) => (
                <p key={Index} className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300 text-xl">{tag}</p>
            ))}
        </div>
    )
}