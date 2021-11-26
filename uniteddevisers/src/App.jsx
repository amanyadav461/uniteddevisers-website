import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
// import {Routes,Route} from "react-router-dom";

function App(){
    return(
        <>
            <NavBar />
            <Main />
            <Footer />
        </>
    );
}

export default App;