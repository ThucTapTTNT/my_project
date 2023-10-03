import React from "react";
import "../../styles/body.scss";
import arrow_1 from "../../assets/images/body/arrow_1.png"
import arrow_2 from "../../assets/images/body/arrow_2.png"

const Arrow = () => {
    return(
        <div className="arrow">
            <div className="arrow-1">
                <img className="icon-arrow" alt="" src={arrow_1}/>
            </div>
            <div className="arrow-1">
                <img className="icon-arrow" alt="" src={arrow_2}/>
            </div>
        </div>
    )
}

export default Arrow;