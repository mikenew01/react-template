import React, {Suspense, lazy} from 'react';
import {Switch, Route } from 'react-router-dom';

const ClientListLazyComponent = lazy(() => import('../features/client/components/client-list'));
const ClientCreateLazyComponent = lazy(() => import('../features/client/components/client-create'));

export default function Routes() {

    return <>
        <Switch>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <Route component={ () => <ClientListLazyComponent/> }  exact path='/clients' />
                <Route component={ () => <ClientCreateLazyComponent /> } exact path='/clients/create' />
            </Suspense>
        </Switch>
    </>;


}