import React from "react";

function celsiusToFahrenheit(celsius) {
    var cTemp = celsius;
    var celsiusToFahrenheit = cTemp * 9 / 5 + 32;
    return Math.floor(celsiusToFahrenheit);
}

const TemperatureCard = (t) => {

    return (
        <div className="databox col-sm-6" key="tempbox">
            <a href="/detail?key=" alt="" title="">
                    <div className="data" id="cardvalue">
                        <span className="size30">{t.value}°C</span>
                    </div>
                    <div className="dataescaled" id="cardeq">
                        {celsiusToFahrenheit(t.value)}°F
                    </div>
                    <div className="centerbox">
                        <div className="leftcenterbox">
                            <img src="./arrow.png" className="uparrow" alt="up arrow" width="15px" />
                            <span className="higher">{t.max}</span>
                            <span className="lower">{t.min}</span>
                            <img className="downarrow" src="./arrow.png" alt="down arrow" width="15px" />
                        </div>
                        <div className="icon">
                            <img id="cardimage" alt="Thermometer" title="Thermometer" src="./thermometer.svg" height="70px" className="ico_temp" />
                        </div>
                        <div className="righttcenterbox">&nbsp;</div>
                    </div>
                <div className="label" id="cardlabel">TEMPERATURA</div>
            </a>
        </div>
    )
}
export default TemperatureCard;
