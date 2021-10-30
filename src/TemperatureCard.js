import React from "react";

function celsiusToFahrenheit(celsius) {
    var cTemp = celsius;
    var celsiusToFahrenheit = cTemp * 9 / 5 + 32;
    return celsiusToFahrenheit;
}

const TemperatureCard = (t) => {

    return (
        <div className="databox">
            <div className="dataparent">
                <div className="data" id="cardvalue">{t}°C</div>
                <div className="dataescaled" id="cardeq">{celsiusToFahrenheit(t)}<br />°F</div>
            </div>
            <div className="icon">
                <img id="cardimage" src="./thermometer.svg" height="70px" class="ico_temp" />
            </div>
            <div className="label" id="cardlabel">TEMPERATURA</div>
        </div>
    )
}
export default TemperatureCard;
