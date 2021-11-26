import React from "react";
import OurServicesLeft from "./OurServicesLeft";
import OurServicesRight from "./OurServicesRight";
function OurServices(){
    return(
        <>
            <div className="os_s1">
                <h6 className="os_smlTitle">EXPERTISE</h6>
                <h3 className="os_title">Explore our featured capabilities.</h3>
                <p className="os_desc">Webcraft India is a top-rated Mumbai based website development company providing solutions for corporate website development, digital marketing, mobile app development, ecommerce website development and seo services. From wireframe to website, concept to solution, targets to reality, we are here to help. These are some of our most requested services:</p>
            </div>
            <div className="os_s2">
                <OurServicesLeft />
                <OurServicesRight />
            </div>
        </>
    );
}

export default OurServices;