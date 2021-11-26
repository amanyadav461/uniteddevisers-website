import React from "react";
import NavData from "./NavData";
// import { Link } from "react-router-dom";

function NavComponent() {
    return (
        <>
            <ul className="NavComponentContainer">
                {
                    NavData.map(function (val, index) {

                        return (
                            <li key={index} className="NavComponent">
                                <span>{val['title']}</span>
                                {
                                    val['dropdown']
                                    &&
                                    <ul className="subTitleNav">
                                        <li className="dropdownInLeft"><img src={val['dropdown']['listImage']} alt={val['dropdown']['listImageTitle']} /></li>
                                        <li className="dropdownInRight">
                                        {
                                            val['dropdown']['subList'].map(function (d_val, d_index) {
                                                return(
                                                    <ul key={d_index} className="sublistBox">
                                                        {
                                                            d_val.map(function(slb_val, slb_index){
                                                                return(
                                                                    <React.Fragment key={slb_index} >
                                                                        <li className="sublistBoxTitle">{slb_val['sl_title']}</li>
                                                                        {
                                                                            slb_val['sl_data'].map(function(slbData_val, slbData_index){
                                                                                return <li key={slbData_index} className="sublistBoxData">{slbData_val['sldTitle']}</li>
                                                                            })
                                                                        } 
                                                                    </React.Fragment>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            })
                                        }
                                        </li>
                                    </ul>
                                }
                            </li>
                        );
                    })
                }
            </ul>

            <div className="NavEnquireButton">
                <button>Enquire Now</button>
            </div>
        </>
    );
}

export default NavComponent;