import Link from "next/link";
import TestFetch from "../components/fetchComponent";
import PopupWindow from "../components/window";

export default function SearchList(){
    return (
        <div className="bg-neutral-200">
            <h1 className="text-4xl text-center p-5">Character Profiles</h1>
            <h2 className="text-center text-xl">Click to expand boxes</h2>
            <Link href={"/"} className="text-xl fixed bottom-5 right-5 bg-white p-2 rounded-2xl hover:bg-gray-300 dark:text-black">Back</Link>
            <div>
                <TestFetch></TestFetch>
            </div>
        </div>
    )
}