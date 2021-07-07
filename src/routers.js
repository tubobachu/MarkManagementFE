import Login from './views/Login'
import TestManagement from "./views/TestManagement";
export const routes = [
    {path: '/login', name: 'login-page', component: Login},
    {path: '/darkboard', name: 'testManagement', component: TestManagement},

    {path: '*', redirect: '/darkboard'}
]