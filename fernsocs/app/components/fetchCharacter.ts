import SetList from "./listElements";

const url = "https://raw.githubusercontent.com/catsrieldreemurr/ocstorage/refs/heads/main/characters.json";

export default async function FetchCharacters(){
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch Data :(")
    const data = await res.json();

    return Array.from(data.characters);
}