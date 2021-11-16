import React, { useState } from "react";

const SwitchOnOff = (t) => {

    return (
        <div className="box" key="tempbox">
            <div className="ico-box">
                <img src="./tvset.png" alt="Metano" className="ico-box-image" height="40px" />
            </div>
            <div className="data-box">
                <div className="main-data-switch">
                    <label className="switch">
                    <input type="checkbox" name="switch" />
                    <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="resume-box">
                <div className="resume-box-partial">&nbsp;<br /></div>
                <div className="resume-box-title">TELEVISÃO</div>
            </div>
        </div>
    )
}
export default SwitchOnOff;
