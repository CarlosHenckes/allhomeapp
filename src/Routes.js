import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
import Detail from './detail';
import Config from './Configs';
import Alarm from './alarms';
import Chart from './Chart';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/detail"/>
            <Route component={Config} path="/configs"/>
            <Route component={Alarm} path="/alarms"/>
            <Route component={Chart} path="/charts"/>
        </BrowserRouter>
    )
}

export default Routes;