import React from "react";

const MethaneCard = (t) => {

    return (
        <div className="databox col-sm-6">

                <div className="data size30" id="cardvalue">{t.value}ppm</div>
                <div className="dataescaled" id="cardeq">&nbsp;</div>
            <div className="icon">
            <img id="cardimage" alt="Metano" title="Metano" src="./methane.png" height="70px" className="ico_mgitetano" />
            </div>
            <div className="label" id="cardlabel">METANO</div>
        </div>
    )
}
export default MethaneCard;