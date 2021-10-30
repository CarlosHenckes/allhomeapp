import React from "react";

const HumidityCard = (t) => {

    return (
        <div className="databox col-sm-6">

                <div className="data size30" id="cardvalue">{t.value}%</div>
                <div className="dataescaled" id="cardeq">&nbsp;</div>
            <div className="icon">
            <img id="cardimage" alt="Humidity" title="Thermometer" src="./humidity.png" height="70px" className="ico_humidity" />
            </div>
            <div className="label" id="cardlabel">HUMIDADE</div>
        </div>
    )
}
export default HumidityCard;
