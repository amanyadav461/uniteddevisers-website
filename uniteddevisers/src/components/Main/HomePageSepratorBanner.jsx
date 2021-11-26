import React from "react";

function HomePageSepratorBanner(props){
    const bannerName = props.banner;
    const bannerData = {
        banner1: [
            {
                text: ["Want to know how you can grow your business,speak to our expert strategists now."],
                button: {
                    buttonText: "Lets connect",
                    buttonLink: "about.html"
                }  
            }
        ],
        banner2: [
            {
                text: ["How can we build your business?"],
                button: {
                    buttonText: "Lets Work Together",
                    buttonLink: "about.html"
                }  
            }
        ],
        banner3: [
            {
                text: ["Our people are our greatest assets"],
                button: {
                    buttonText: "Lets Work Together",
                    buttonLink: "about.html"
                }  
            }
        ],
    };
    return(
        <>
            <div className="hpsbContainer">
            {
                Object.entries(bannerData).map(function(val,index){
                    return (
                        val[0] === bannerName ? 
                        val[1].map(function(i,j){
                            return(
                                <React.Fragment key={j}>
                                    {i['text'] && i['text'].map(function(x,y){
                                        return <p key={y} className="hpsb_text">{x}</p>;
                                    })}

                                    {i['button'] && <button className="hpsb_button">{i['button']['buttonText']}</button>}
                                </React.Fragment>
                            )
                        })
                        :console.log("FUCK YOU")
                    )
                })   
            }
            </div>
        </>
    )
}

export default HomePageSepratorBanner;