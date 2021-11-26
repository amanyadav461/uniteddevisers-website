import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function NavBarUpper(){
    return(
        <>
            <div className="navbarUpperCont">
                <ul className="navContactDetails">
                    <li className="contactDetails"><FaEnvelope />&nbsp;uniteddevisers@gmail.com</li>
                </ul>
                <ul className="NavSocialComponentContainer">
                    <li className="navSocialIcon Facebook"><FaFacebookSquare /></li>
                    <li className="navSocialIcon Instagram"><FaInstagramSquare /></li>
                    <li className="navSocialIcon Linkedin"><FaLinkedin /></li>
                </ul>
            </div>
        </>
    );
}

export default NavBarUpper;