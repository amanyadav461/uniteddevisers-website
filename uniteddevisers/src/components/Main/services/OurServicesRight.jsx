import React from "react";
import OurServicesBox from "./OurServicesBox";
import ourServicesBoxData from "./OurServicesBoxData";

function OurServicesRight(){
    return(
        <>
            <div className="osr_s1">
                {
                    ourServicesBoxData.map(function(val, index){
                        return <OurServicesBox key={index} dataTitle={val.title} dataDesc={val.description} dataButton={val.button} imgSrc={val.imgSrc}/>
                    })
                }
            </div>
        </>
    );
}

export default OurServicesRight;