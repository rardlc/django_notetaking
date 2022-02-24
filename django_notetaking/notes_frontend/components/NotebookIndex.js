import { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import NoteIndex from "./NoteIndex";
export default function NotebookIndex({ children }) {

    const [notebooks, setNotebooks] = useState([
        { title: "Howdy", made_on: "today", date_accessed: "also today", notes: []},
        { title: "supersalicjisjdocious Mysterious", made_on: "today", date_accessed: "also today", notes:[] },
        { title: "Howdy", made_on: "today", date_accessed: "also today",notes: [{id: 1,title: "good night",body:"tell me"},{id: 5,title: "good night",body:"something new"},{id: 6,title: "good night",body:"all the time"},{id: 7,title: "good night",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar erat quis suscipit rhoncus. Pellentesque vitae posuere nibh. Vestibulum non tortor dapibus, molestie turpis ac, volutpat nisl. Nulla ac neque volutpat, iaculis leo efficitur, rutrum est. Maecenas eu tortor eros. Ut quis mi bibendum, rhoncus ligula quis, tincidunt ante. Nulla nisl felis, posuere nec metus ut, dignissim rhoncus metus. Morbi fringilla purus nec blandit sollicitudin. Fusce sit amet imperdiet est. Praesent egestas ut ligula vel sagittis. Nam sodales, diam at porta volutpat, lectus massa luctus orci, ut auctor felis nulla quis lacus. Cras sed mauris quam. Aliquam suscipit bibendum sem, nec pulvinar diam. "}]},
        { title: "Howdy", made_on: "today", date_accessed: "also today",notes: [{id: 3,title: "good night",body:""}] },
        { title: "Howdy", made_on: "today", date_accessed: "also today",notes: [{id: 2,title: "good night",body:""},{id: 8,title: "good night",body:""}] },
        { title: "Howdy", made_on: "today", date_accessed: "also today",notes: [{id: 4,title: "good night",body:""},{id: 9,title: "good night",body:""}] },

    ])

    const [collapsed, setCollapsed] = useState(false)
    const [activeNb, setActiveNb] = useState(0)

    function setActive(index){
        console.log(arguments)
        setCollapsed(true)
        setActiveNb(index)
    }

    return (
        <div className={"splitPane"}>
            <div className={collapsed ? "collapsed" : "notebookSpace"}>
                {notebooks.map(
                    (notebook, nbIndex) => {
                        return (

                            <div key={nbIndex} className={activeNb === nbIndex ? "activeNb notebook" : "notebook"} onClick={() => setActive(nbIndex)}>
                                <div className="notebookSpine">
                                </div>
                                <div className="notebookHead">
                                    <ListGroup>
                                        <ListGroupItem><h3 className="title">{notebook.title}</h3></ListGroupItem>
                                        <ListGroupItem>{notebook.made_on}<br />
                                            {notebook.date_accessed}</ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>


                        )
                    })}
                {children ? children : null}
            </div>
            {/* <div className="expandArrow">Expand</div> */}
            {< NoteIndex collapsedParent={collapsed} notes={notebooks[activeNb].notes}></NoteIndex>}
        </div>

    )
}