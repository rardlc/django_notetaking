import { useState } from "react";

export default function NoteIndex({children}){
    return(
        <div className="noteIndex">
            {...children}
        </div>
    )
}