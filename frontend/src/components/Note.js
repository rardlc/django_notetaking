import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Note({noteId, children}){

    let {id} = useParams();
    let [noteData, setNoteData] = useState()

    useEffect(
        () => {
            fetch("http://localhost:8000/notes/",{credentials: 'include'}).then(
                (resVal) => {
                    let body = resVal.body
                    resVal.blob().then( (val) => val.text()).then(
                        (isAText) => {
                            console.log(isAText)

                            // fetch("http://localhost:8000/notes/",{withCredentials: true}).then(
                            //     (res2Val) => {
                            //         res2Val.blob()
                            //         .then( val => val.text() )
                            //         .then( isMoreText => console.log(isMoreText) )
                            //     }
                            // )
                        }
                    )
                    console.log(body)
                    // return new ReadableStream({
                    //     start(controller) {
                    //       // The following function handles each data chunk
                    //       function push() {
                    //         // "done" is a Boolean and value a "Uint8Array"
                    //         reader.read().then( ({done, value}) => {
                    //           // If there is no more data to read
                    //           if (done) {
                    //             console.log('done', done);
                    //             controller.close();
                    //             return;
                    //           }
                    //           // Get the data and send it to the browser via the controller
                    //           controller.enqueue(value);
                    //           // Check chunks by logging to the console
                    //           console.log(done, value);
                    //           push();
                    //         })
                    //       }
                    
                    //       push();
                    //     }
                    //   });
                },
                (failed) => {
                    console.log(failed)
                }
            )
        }
    ,[])

    return(
        <>
        <div style={{padding: "1rem"}}>
        <div className='noteCard'>
            This is the part where I look up this note from the backend using {id}
            </div> 
        </div>
        {children ? children : null}</>
    )
}