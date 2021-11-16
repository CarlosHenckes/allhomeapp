import React from "react";

function celsiusToFahrenheit(celsius) {
    var cTemp = celsius;
    var celsiusToFahrenheit = cTemp * 9 / 5 + 32;
    return Math.floor(celsiusToFahrenheit);
}

const TemperatureCard = (t) => {

    return (
        <div className="box" key="tempbox">
            <div className="ico-box">
                <img src="./thermometer.svg" alt="" className="ico-box-image" height="50px" />
            </div>

            <div className="data-box">
                <div className="main-data font-34">{t.value}
                    <span className="main-data-min">°C</span>
                </div>
                <div className="ref-data">{celsiusToFahrenheit(t.value)}°F</div>
            </div>
            
            <div className="resume-box">
                <div className="resume-box-partial">
                    {t.max}°C<img src="./uparrow.png" alt="" className="ico-box-image" height="14px" /><br/>
                    {t.min}°C<img src="./downarrow.png" alt="" className="ico-box-image" height="14px" />
                </div>
                <div className="resume-box-title">TEMPERATURA</div>
            </div>
        </div>
    )
}
export default TemperatureCard;
