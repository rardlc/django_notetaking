import { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default function NotebookIndex({ children }) {

    const [notebooks, setNotebooks] = useState([
        { title: "Howdy", made_on: "today", date_accessed: "also today" },
        { title: "Howareya", made_on: "today", date_accessed: "also today" },
        { title: "Howdy", made_on: "today", date_accessed: "also today" },
        { title: "Howdy", made_on: "today", date_accessed: "also today" },
        { title: "Howdy", made_on: "today", date_accessed: "also today" },
    ])

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={collapsed ? "collapsed": "notebookSpace"}>
            {notebooks.map(
                (notebook, nbIndex) => {
                return (

                    <div className="notebook" onClick={() => setCollapsed(!collapsed)}>
                        <div className="notebookSpine">
                        </div>
                        <div className="notebookHead">
                            <ListGroup>
                            <ListGroupItem><h3 className="title">{notebook.title}</h3></ListGroupItem>
                            <ListGroupItem>{notebook.made_on}<br/>
                            {notebook.date_accessed}</ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>

                    
                )
            })
            }
            {children ? children : null}
        </div>
    )
}