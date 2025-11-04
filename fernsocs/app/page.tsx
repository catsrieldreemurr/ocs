import Image from "next/image";
import TestFetch from "./components/fetchComponent";
import Link from "next/link";
import SearchOptions from "./components/searchmode";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl p-5">Fern's OC Storage</h1>
      <input type="search" id="search" name="searchField" size={20} className="border p-5 text-xl rounded-4xl text-center sm:w-[50%]" placeholder="Enter Search"></input>
      <SearchOptions></SearchOptions>

      <Link href={"/list"} className="text-xl fixed bottom-5 right-5">Go to Character List instead</Link>
    </div>
  );
}
