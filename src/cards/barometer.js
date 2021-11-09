import React from "react";

function hectopascalsToMMMercury(hpa) {
    return Math.floor(hpa * 0.750062);
}

const BarometerCard = (t) => {

    return (
        <div className="databox col-sm-6" key="tempbox">
            <a href="/detail?key=" alt="" title="">
                    <div className="data" id="cardvalue">
                        <span className="size30">{t.value}</span>
                        <span className="size10">hPa</span>
                    </div>
                    <div className="dataescaled" id="cardeq">{hectopascalsToMMMercury(t.value)}mm/Hg</div>
                    <div className="centerbox">
                        <div className="leftcenterbox">
                            <img alt="uparrow" src="./arrow.png" className="uparrow" width="15px" />
                            <span className="higher">1023</span>
                            <span className="lower">1020</span>
                            <img className="downarrow" alt="down arrow" src="./arrow.png" width="15px" />
                        </div>
                    <div className="icon">
                        <img id="cardimage" alt="Thermometer" title="Thermometer" src="./barometer.png" height="70px" className="ico_temp" />
                    </div>
                    <div className="righttcenterbox">&nbsp;</div>
                </div>
                <div className="label" id="cardlabel">PRESSÃO ATM.</div>
            </a>
        </div>
    )
}
export default BarometerCard;
