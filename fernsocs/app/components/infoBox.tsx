import { ReactNode } from "react";

interface setTypes{
    children: ReactNode
}

export default function InfoBox({children}:setTypes){
    return(
        <div className="p-5 bg-gray-200 rounded-xl mt-5 sm:w-[50rem]">
            {children}
        </div>
    )
}