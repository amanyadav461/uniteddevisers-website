import React from "react";
import SliderContainer from "./SliderContainer";
function HomeSlider(){
    return(
        <>
            <div className="sliderContainer">
                <SliderContainer sliderAuto="true" sliderSpeed="10000"/>
            </div>
        </>
    );
}

export default HomeSlider;