import SetList from "./listElements";

const url = "https://raw.githubusercontent.com/catsrieldreemurr/ocstorage/refs/heads/main/characters.json";

export default async function TestFetch(){
    const res = await fetch(url);
    const data = await res.json();

    return (
    <SetList charactersData={data.characters}></SetList>
    )
}