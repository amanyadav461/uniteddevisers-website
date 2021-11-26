import React from "react";
import NavComponent from "./NavComponent";
import NavBarUpper from "./NavBarUpper";

function NavBar(){
    return(
        <header>
            <NavBarUpper />
            <nav className="navContainer">
                <div className="siteLogo">
                    United Devisers
                </div>
                <NavComponent />            
            </nav>
        </header>
    );
}

export default NavBar;