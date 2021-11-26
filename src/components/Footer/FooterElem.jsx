import React from "react";

function FooterElem(props){
    return(
        <>
            {
                props.colsData.map(function(val, index){
                    return(
                        <React.Fragment key={index}>
                            <li  className="FooterTitle">{val['title']}</li>
                            <ol className="FooterElem">
                                {
                                    val['listData'].map(function(sVal, sIndex){
                                        return <li key={sIndex} className="footerLink">{sVal['ld_title']}</li>
                                    })
                                }
                            </ol>
                        </React.Fragment>
                    )
                })
            }
        </>
    );
}

export default FooterElem;