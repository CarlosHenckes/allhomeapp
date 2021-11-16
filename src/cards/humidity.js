import React from "react";

const HumidityCard = (t) => {

    return (
        <div className="box" key="tempbox">
            <div className="ico-box">
                <img src="./humidity.png" alt="Humidade" className="ico-box-image" height="45px" />
            </div>
            <div className="data-box">
                <div className="main-data font-34">{t.value}
                    <span className="main-data-min">%</span>
                </div>
                <span className="ref-data">&nbsp;</span>
            </div>
            <div className="resume-box">
                <div className="resume-box-partial">
                    {t.max}%<img src="./uparrow.png" alt="" className="ico-box-image" height="14px" /><br />
                    {t.min}%<img src="./downarrow.png" alt="" className="ico-box-image" height="14px" />
                </div>
                <div className="resume-box-title">HUMIDADE</div>
            </div>
        </div>
    )
}
export default HumidityCard;
