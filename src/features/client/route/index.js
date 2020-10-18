import { lazy } from 'react';

const routes = [
    {
        path: '/clients',
        component: lazy(() => import('../components/client-list')),
        exact: true
    },
    {
        path: '/clients/create',
        component: lazy(() => import('../components/client-create')),
        exact: true
    }
];

export default routes;