import React from "react";
import FooterData from "./FooterData";
import FooterElem from "./FooterElem";

function FooterCols(){
    return(
        <>
            {FooterData.map(function(cols, index){
                return(
                    <ul key={index} className="footerCols">
                        <FooterElem colsData={cols} />
                    </ul>
                );
            })}
        </>
    );
}

export default FooterCols;