import Link from "next/link";
import TestFetch from "../components/fetchComponent";

export default function SearchList(){
    return (
        <div>
            <h1 className="text-4xl text-center p-5">Character Profiles</h1>
            <h2 className="text-center text-xl">Click to expand boxes</h2>
            <Link href={"/"} className="text-xl fixed bottom-5 right-5 bg-white p-2 rounded-2xl">Back</Link>
            <div>
                <TestFetch></TestFetch>
            </div>
        </div>
    )
}