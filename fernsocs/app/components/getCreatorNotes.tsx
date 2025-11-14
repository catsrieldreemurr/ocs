interface setTypes{
    notes: string[]
}

export default function CreatorNotes({notes}:setTypes){
    return(
        <div className="mt-5">
            <p className="text-xl font-bold">Creator Notes:</p>
            {notes.length == 0 && <p className="text-xl">- No Notes!</p>}
            {notes.map((note, Index) =>
                <p key={Index} className="text-xl">- {notes[Index]}</p>
            )}
        </div>
    )
}