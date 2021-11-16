import React from 'react';
import nav from "./Navbar";

const Config = () => {
    nav.changeTitle('Configs');
    return(
        <div className="app-container" key="appcontainer">
            <div className="row row-cols-2 row-cols-md-12 g-2 mt-2">
                
                    <div className="card-body">
                        <div className="col">
                            <div className="card databoxconfig">
                                <div className="icon">
                                    <a href="/alarms" alt="lnk-alarm" key="k-alarm">
                                    <img src="./ico-configs.png" width="70px" alt="Configurations" /></a>
                                </div>
                                <div className="label no-wrap">Alarmes</div>
                            </div>
                        </div>
                    </div>
                
                <div className="col">
                    <div className="card databoxconfig">
                        <div className="card-body">
                            <div className="icon">
                                <img src="./ico-configs.png" width="70px" alt="Configurations" />
                            </div>
                            <div className="label no-wrap">Alarmes</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card databoxconfig">
                        <div className="card-body">
                            <div className="icon">
                                <img src="./ico-configs.png" width="70px" alt="Configurations" />
                            </div>
                            <div className="label no-wrap">Alarmes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Config;