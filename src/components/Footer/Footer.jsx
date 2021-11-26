import React from "react";
import FooterCols from "./FooterCols";
import {FaHeart} from "react-icons/fa";

function Footer(){
    return(
        <footer>
            <div className="footer">
                <FooterCols />
            </div>
            <div className='footerBottom'>
                <p className="footerBottomText">Made with <FaHeart /> in Aamchi Mumbai</p>
                <p className="footerBottomText">© Copyright 2021 UnitedDevisers. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;