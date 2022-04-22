import React from 'react'
import {Link} from "react-router-dom";

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md" style={{backgroundColor: "#00A9B1"}}>
                <a style={{color: "white"}} className="navbar-brand" href="/books">Library Application&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li style={{color: "white"}} className="nav-item active">
                            <Link style={{color: "white"}} className="nav-link" to={"/books"}>    Books</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color: "white"}} className="nav-link" to={"/categories"}>    Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default header;