import React from 'react';
import nav from "./Navbar";

const Config = () => {
    nav.changeTitle('Configs');
    return (
        <div className="app-container" key="appcontainer">
            <div className="row row-cols-4 row-cols-md-12 g-2 mt-2">


                <div className="col">
                    <div className="card databoxconfig card-conf-round">
                        <div className="card-body">
                            <div className="icon-center">
                                <a href="/alarms" alt="lnk-alarm" key="k-alarm">
                                    <img src="./ico-configs.png" width="50px" alt="Configurations" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="label config-label no-wrap">Alarmes</div>
                </div>

                <div className="col">
                    <div className="card databoxconfig card-conf-round">
                        <div className="card-body">
                            <div className="icon-center">
                                <img src="./ico-edit.png" width="50px" alt="Configurations" />
                            </div>
                        </div>
                    </div>
                    <div className="label config-label no-wrap">Editar Dados</div>
                </div>

                <div className="col">
                    <div className="card databoxconfig card-conf-round">
                        <div className="card-body">
                            <div className="icon-center">
                                <img src="./ico-temp.png" width="50px" alt="Configurations" />
                            </div>
                        </div>
                    </div>
                    <div className="label config-label no-wrap">Nono</div>
                </div>

                <div className="col">
                    <div className="card databoxconfig card-conf-round">
                        <div className="card-body">
                            <div className="icon-center">
                                <img src="./ico-temp.png" width="50px" alt="Configurations" />
                            </div>
                        </div>
                    </div>
                    <div className="label config-label no-wrap">Nono</div>
                </div>
            </div>
        </div>
    )
}

export default Config;