import { ReactNode } from "react";

interface setTypes{
    children: ReactNode
    colors?: string
    textColor?: boolean
    variant?: string
}

export default function InfoBox({children, colors, textColor, variant}:setTypes){
    return(
        <div className={`p-5 rounded-xl mt-5 ${colors || "bg-gray-200"} ${textColor || "text-black"} ${variant == "small" && "sm:w-2/3"}`}>
            {children}
        </div>
    )
}