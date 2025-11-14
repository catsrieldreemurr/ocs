"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import SearchOptions from "./components/searchmode";
import Image from "next/image";
import FetchCharacters from "./components/fetchCharacter";
import SearchResultsWindow from "./components/searchResults";

export default function Home() {
  const [searchSelect, setSearchSelect] = useState("name")
  const [currentSearch, setSearch] = useState("")
  const [characters,setCharacters] = useState<any[]>([])
  const [results, setResults] = useState<any[]>([])
  const [windowIsOpen, setWindowOpen] = useState(false)
  const [resultWindow, setResultOpen] = useState(false)

  useEffect(() => {
    FetchCharacters().then(setCharacters)
  }, [])
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setSearch(e.target.value)
  }
  function search(parameter:string, searchSelect:string){
    const term = parameter.toLowerCase()
    const filtered = characters.filter((char)=>{
      switch(searchSelect){
        case "name":
          return(char.characterProfile.fullName.toLowerCase().includes(term));
        case "tag":
          return((char.metaInfo.tags || []).join(" ").toLowerCase().includes(term))
        case "universe":
          return(char.universeInfo.mainUniverse.toLowerCase().includes(term))
        case"category":
          return(char.metaInfo.category.toLowerCase().includes(term))
        default:
          return(false)
      }
    })

    setResults(filtered)
    setWindowOpen(true)
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-neutral-200 dark:text-black">
    {windowIsOpen && <SearchResultsWindow results={results} setOpen={setWindowOpen} setResultOpen={setResultOpen} resultsIsOpen={resultWindow}></SearchResultsWindow>}
      <h1 className="text-4xl p-5 font-bold">Fern's OC Storage</h1>
      <div className="flex">
        <input type="search" id="search" name="searchField" size={20} className="border p-5 text-xl rounded-s-4xl text-center bg-white w-[18rem] sm:w-[25rem] hover:bg-gray-300" placeholder="Enter Search"
        onChange={handleChange}
        ></input>
        <button
        onClick={() => search(currentSearch, searchSelect)}
        className="bg-white w-[4rem] rounded-e-4xl border hover:bg-gray-300"> <Image src={"/search.svg"} height={200} width={200} alt="searchbutton" className="h-[2rem] w-[2rem] m-auto"></Image> </button>
      </div>
      <SearchOptions setSearchSelect = {setSearchSelect} searchSelect ={searchSelect}></SearchOptions>

      <Link href={"/list"} className="text-xl fixed bottom-5 right-5 bg-white p-2 rounded-2xl hover:bg-gray-300 dark:text-black">Go to Character List instead</Link>
    </div>
    
  );
}
