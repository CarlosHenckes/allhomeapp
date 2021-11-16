import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
import Detail from './detail';
import Config from './Configs';
import Alarm from './alarms';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/detail"/>
            <Route component={Config} path="/configs"/>
            <Route component={Alarm} path="/alarms"/>
        </BrowserRouter>
    )
}

export default Routes;