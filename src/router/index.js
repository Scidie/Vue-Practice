import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import AccountPage from '../views/AccountPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home

    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/RegistrationPage',
        name: 'RegistrationPage',
        component: RegistrationPage
    },
    {
        path: '/AccountPage',
        name: 'AccountPage',
        component: AccountPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

        