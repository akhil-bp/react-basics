import React from 'react';

const A = React.lazy(() => import('./components/a'));
const b = React.lazy(() => import('./components/b'));

const routes = [
    // { path: '/', exact: true, name: 'a' },
    { path: '/a', name: 'a', component: A },
    { path: '/b', name: 'b', component: b },
];

export default routes;
