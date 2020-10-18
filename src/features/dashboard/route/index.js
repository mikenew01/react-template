import { lazy } from 'react';

const routes = [
    {
        path: '/dash',
        component: lazy(() => import('../components/dashboard')),
        exact: true
    }
];

export default routes;