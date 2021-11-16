import React from "react";

function hectopascalsToMMMercury(hpa) {
    return Math.floor(hpa * 0.750062);
}

const BarometerCard = (t) => {

    return (
        <div className="box" key="tempbox">
            <div className="ico-box">
                <img src="./barometer.png" alt="" className="ico-box-image" height="50px" />
            </div>
            <div className="data-box">
                <div className="main-data font-34">{t.value}
                    <span className="main-data-min">hPa</span>
                </div>
                <div className="ref-data">{hectopascalsToMMMercury(t.value)}mm/Hg</div>
            </div>
            <div className="resume-box">
                <div className="resume-box-partial">
                    {t.max}hPa<img src="./uparrow.png" alt="" className="ico-box-image" height="14px" /><br />
                    {t.min}hPa<img src="./downarrow.png" alt="" className="ico-box-image" height="14px" />
                </div>
                <div className="resume-box-title">PRESSÃO ATM.</div>
            </div>
        </div>
    )
}
export default BarometerCard;
