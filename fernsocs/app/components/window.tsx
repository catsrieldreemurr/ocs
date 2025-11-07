import React from "react";
import * as CharacterTypes from "../types/characterTypes"

export default function PopupWindow({charactersData}:CharacterTypes.setListProps){
    return(
        <div className="w-[95%] sm:w-[80%] rounded-xl text-black p-5 fixed top-1/2 -translate-y-1/2 shadow-md/5 z-100 bg-white left-1/2 -translate-x-1/2 transform h-[90%]">
            <h1>{charactersData[0].characterProfile.fullName}</h1>
        </div>
    )
}