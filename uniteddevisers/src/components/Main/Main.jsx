import React from "react";
import OurServices from "./services/OurServices";
import HomeSlider from "./slider/HomeSlider";
import HomePageSepratorBanner from "./HomePageSepratorBanner";
import CaseStudySlider from "./CaseStudySlider/CaseStudySlider";
function Main(){
    return(
        <>
            <main>
                <HomeSlider />
                <HomePageSepratorBanner banner="banner1" />
                <OurServices />
                <HomePageSepratorBanner banner="banner2" />
                <CaseStudySlider />
            </main>
        </>
    );
}

export default Main;