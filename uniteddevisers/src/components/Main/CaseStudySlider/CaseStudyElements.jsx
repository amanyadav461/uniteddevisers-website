import React from "react";

function CaseStudyElements({ cseTitle, cseDesc, cseBtn }) {
    return (
        <>
            <div className="cseContainer">
                <h4 className="cseTitle">{cseTitle}</h4>
                <p className="cseDesc">{cseDesc}</p>
                {
                    cseBtn && cseBtn.map(function (btnVal, index) {
                        return <button key={index} className="cseBtn">{btnVal['btn1Text']}</button>
                    })
                }
            </div>
        </>
    )
}

export default CaseStudyElements;