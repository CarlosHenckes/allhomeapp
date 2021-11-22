import React from "react";

const MethaneCard = (e, t) => {

    return (
        <div className="box" key="tempbox">
            <div className="ico-box">
                <img src="./methane.png" alt="Metano" className="ico-box-image" height="45px" />
            </div>
            <div className="data-box">
                <div className="main-data font-34">{t.value}
                    <span className="main-data-min">ppm</span>
                </div>
                <span className="ref-data">&nbsp;</span>
            </div>
            <div className="resume-box">
                <div className="resume-box-partial">&nbsp;<br /></div>
                <div className="resume-box-title">METANO</div>
            </div>
        </div>
    )
}
export default MethaneCard;