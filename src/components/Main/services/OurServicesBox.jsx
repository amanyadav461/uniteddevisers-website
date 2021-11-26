import React from "react";

function OurServicesBox(props){
    return(
        <>
            <div className="ourServiceBox">
                <div className="osb_img"><img src={props.imgSrc} alt={props.dataTitle} /></div>
                <h4 className="osb_title">{props.dataTitle}</h4>
                <p className="osb_desc">{props.dataDesc}</p>
                <button className="osb_button">{props.dataButton}</button>
            </div>
        </>
    );
}

export default OurServicesBox;