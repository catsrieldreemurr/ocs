interface SetTypes{
    abilities: string[]
    skills: string[]
    weaknesses: string[]
    strengths: string[]
}

const listItem = "text-xl bg-gray-200 p-2 rounded-xl mt-1"

function GetItems(item:string[]){
    if(item.length <= 0){return <p className={listItem}>None</p>}
    return item.map((cItem, index) => <p key={index} className={listItem}>{cItem}</p>)
}

const divClass = "flex gap-2";
const textClass = "font-bold text-xl p-2";

export default function GetSkills({abilities, skills, weaknesses, strengths}:SetTypes){
    return(
        <div className="mt-5">
            <div className={divClass}>
                <p className={textClass}>Abilities:</p>
                {GetItems(abilities)}
            </div>
            
            <div className={divClass}>
                <p className={textClass}>Skills:</p>
                {GetItems(skills)}
            </div>

            <div className={divClass}>
                <p className={textClass}>Strengths:</p>
                {GetItems(strengths)}
            </div>

            <div className={divClass}>
                <p className={textClass}>Weaknesses:</p>
                {GetItems(weaknesses)}
            </div>
        </div>
    )
}