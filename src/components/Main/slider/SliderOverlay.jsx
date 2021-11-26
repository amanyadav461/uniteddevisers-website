import React from "react";

function SliderOverlay(props) {
    return (
        <>
            {props.sodData['title'] && <h3 className={props.addClassName ? "sliderOverlayTitle showOverlayTitle" : "sliderOverlayTitle"}>{props.sodData['title']}</h3>}
            {props.sodData['description'] && <p className={props.addClassName ? "sliderOverlayDesc showOverlayDesc" : "sliderOverlayDesc"}>{props.sodData['description']}</p>}
            <div className={props.addClassName ? "sliderOverButCont showOverlayButton" : "sliderOverButCont"}>
                {props.sodData['CTA'] && <button className="sliderOverlayButton">{props.sodData['CTA']}</button>}
            </div>
        </>
    );
}

export default SliderOverlay;