import { useState } from "react";
import { useParams } from "react-router";

export default function Note({noteId, children}){

    let {id} = useParams();

    return(
        <>Mochi Mochi{children ? children : null}</>
    )
}