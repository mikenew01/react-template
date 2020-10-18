import React, {Suspense} from 'react';
import {Switch, Route } from 'react-router-dom';

import clientRoutes from '../features/client/route';
import dashboardRoutes from '../features/dashboard/route';

export default function Routes() {

    return <>
        <Switch>
            <Suspense fallback={<h1>Carregando...</h1>}>
                { clientRoutes.map(route => (<Route component={route.component} exact={route.exact} path={route.path}/> ))}
                { dashboardRoutes.map(route => (<Route component={route.component} exact={route.exact} path={route.path}/> ))}
            </Suspense>
        </Switch>
    </>;


}