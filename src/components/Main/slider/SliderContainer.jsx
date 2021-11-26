import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import SliderOverlay from "./SliderOverlay";
import SliderData, { SliderOverlayData } from "./SliderData";

function SliderContainer(props) {
    const [slideIndex, updateSlideIndex] = useState(1);

    function nextSlide() {
        if (slideIndex !== SliderData.length) {
            updateSlideIndex(slideIndex + 1);
        } else {
            updateSlideIndex(1);
        }
    }

    function prevSlide() {

        if (slideIndex === 1) {
            updateSlideIndex(SliderData.length);
        } else {
            updateSlideIndex(slideIndex - 1);
        }
    }

    useEffect(function () {
        if (props.sliderAuto) {
            if (props.sliderSpeed) {
                const sliderTimout = setTimeout(function () {
                    nextSlide();
                }, props.sliderSpeed);
                return function () { clearTimeout(sliderTimout) }
            } else {
                const sliderTimout = setTimeout(function () {
                    nextSlide();
                }, 5000);
                return function () { clearTimeout(sliderTimout) }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex]);

    return (
        <>
            {
                SliderData.map(function (val, index) {
                    return (
                        <div key={index} className={(slideIndex === index + 1 ? "slider sliderShow" : "slider")}>
                            <img src={val['src']} alt={val['alt']} />
                        </div>
                    );
                })
            }
            {
                SliderOverlayData.map(function(val, index){
                    return(
                            <SliderOverlay key={index} sodData={val} addClassName={(slideIndex === index + 1 ? true: false)}/>
                    )
                })
            }

            <button title="next" onClick={nextSlide} className="sliderButton nextButton"><GrNext className="test" /></button>
            <button title="Prev" onClick={prevSlide} className="sliderButton prevButton"><GrPrevious color={"green"} /></button>
        </>
    );
}

export default SliderContainer;