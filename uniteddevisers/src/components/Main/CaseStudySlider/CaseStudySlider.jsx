import React, { useState } from "react";
import CaseStudyElements from "./CaseStudyElements";
import CaseStudyData from "./CaseStudyData";

function CaseStudySlider() {
    const [sliderIndex, updateSliderIndex] = useState(0);
    const [imgHolder, updateImgHolder] = useState([]);

    function updateCaseStudySlider(btnVal) {
        updateSliderIndex(btnVal)
    }

    return (
        <>
            <div className="cssHolder">
                <div className="cssHolderLeft cssNavButtonCont">
                    {
                        CaseStudyData.map(function (btnCount, btnIndex) {
                            return (
                                <button key={btnIndex} className="cssNavBtn" onClick={function () {
                                    updateCaseStudySlider(btnIndex)
                                }}>{(btnIndex + 1)}</button>
                            )
                        })
                    }
                </div>
                <div className="cssHolderRight">
                    {CaseStudyData.map(
                        function (i, j) {
                            return (
                                <React.Fragment key={j}>
                                    <div className={(sliderIndex === j) ? "CaseStudySliderContainer showCss" : "CaseStudySliderContainer"}>
                                        <CaseStudyElements cseTitle={i['title']} cseDesc={i['description']} cseBtn={i['button']} />
                                    </div>
                                </React.Fragment>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}

export default CaseStudySlider;