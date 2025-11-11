import Link from "next/link";
import SearchOptions from "./components/searchmode";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-neutral-200">
      <h1 className="text-4xl p-5 font-bold">Fern's OC Storage</h1>
      <input type="search" id="search" name="searchField" size={20} className="border p-5 text-xl rounded-4xl text-center sm:w-[50%] bg-white" placeholder="Enter Search"></input>
      <SearchOptions></SearchOptions>

      <Link href={"/list"} className="text-xl fixed bottom-5 right-5 bg-white p-2 rounded-2xl dark:text-black">Go to Character List instead</Link>
    </div>
  );
}
