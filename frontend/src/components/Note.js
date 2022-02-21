import { useState } from "react";

export default function Note({children}){
    return(
        <div className="notetakingWindow">
            {...children}
        </div>
    )
}