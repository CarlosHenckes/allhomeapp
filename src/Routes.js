import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
import Detail from './detail';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/detail"/>
        </BrowserRouter>
    )
}

export default Routes;