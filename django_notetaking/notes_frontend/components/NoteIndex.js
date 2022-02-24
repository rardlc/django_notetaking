import { useState } from "react";
import { Link } from "react-router-dom";
import Note from "./Note"
export default function NoteIndex({ collapsedParent, children, notes }) {

    const [openNote, setOpenNote] = useState()

    function setActiveNote(id){
        
        setOpenNote(id)

    }

      return (

        <div className={collapsedParent ? "noteIndex" : "hidden"}>
            {
                notes.map(
                    (note, nIndex) => {
                        return (
                            <Link to={"/notes/" + note.id} className="notetakingWindow">
                                <div className="notetakingHead">
                                    <p>{note.title}</p>
                                </div>
                                <div className="notetakingBody">
                                    <p>{note.body}</p>
                                </div>
                            </Link>)
                        // return (<Note data={note}></Note>)
                    }
                )
            }

            {children ? children : null}

        </div>
    )
}