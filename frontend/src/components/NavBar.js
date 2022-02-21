import { useState } from "react";
import { InputGroup, Button, Input, ButtonDropdown } from "reactstrap";

export default function NavBar({children}){
    return(
        <div className="navBar">
            {children ? children: null}
        </div>
    )
}