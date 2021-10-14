import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';
import Home from '../src/pages/home';
import Repository from '../src/pages/repository';


export default () => {
    return(
        <Switch>
            <RouteHandler exact path='/'>
                <Home />
            </RouteHandler>
            <RouteHandler exact path='/repository'>
                <Repository />
            </RouteHandler>
        </Switch>
    )
}