"use client"

import Link from "next/link";
import { useState } from "react";
import SearchOptions from "./components/searchmode";
import Image from "next/image";

export default function Home() {
  const [searchSelect, setSearchSelect] = useState("")
  const [currentSearch, setSearch] = useState("")
  
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-neutral-200">
      <h1 className="text-4xl p-5 font-bold">Fern's OC Storage</h1>
      <div className="flex">
        <input type="search" id="search" name="searchField" size={20} className="border p-5 text-xl rounded-s-4xl text-center bg-white w-[25rem] hover:bg-gray-300" placeholder="Enter Search"
        onChange={(e) => {
          setSearch("")
        }}
        ></input>
        <button className="bg-white w-[4rem] rounded-e-4xl border hover:bg-gray-300"> <Image src={"/search.svg"} height={200} width={200} alt="searchbutton" className="h-[2rem] w-[2rem] m-auto"></Image> </button>
      </div>
      <SearchOptions setSearchSelect = {setSearchSelect} searchSelect ={searchSelect}></SearchOptions>

      <Link href={"/list"} className="text-xl fixed bottom-5 right-5 bg-white p-2 rounded-2xl hover:bg-gray-300 dark:text-black">Go to Character List instead</Link>
    </div>
  );
}
