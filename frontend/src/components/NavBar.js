import { useState } from "react";
import { InputGroup, Button, Input, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar({ children }) {

    const [showDropdown, setShowDropdown] = useState(false)
    const [searchType, setSearchType] = useState(0)

    return (
        <div className="navBar">
            <div className="right">
            <InputGroup>
                {/* Search Input */}
                <Input />
                {/* Search Options */}
                <ButtonDropdown isOpen={showDropdown}
                    toggle={() => setShowDropdown(!showDropdown)}
                >
                    <DropdownToggle caret>
                        Search
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            Search Options
                        </DropdownItem>

                        <DropdownItem active={searchType === 0 ? true : false} onClick={() => setSearchType(0)}>
                            In this notebook
                        </DropdownItem>
                        <DropdownItem active={searchType === 1 ? true : false} onClick={() => setSearchType(1)}>
                            In all notebooks
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </InputGroup>
            </div>
            {children ? children : null}
        </div>
    )
}