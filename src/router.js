
import Vue from "vue"

import Router from "vue-router"


import Login from "./view/Login.vue"
import Signup from "./view/Signup.vue"
import Home from "./view/Home.vue"
import Article from "./view/Article.vue"
import CreateArticle from "./view/CreateArticle.vue"


Vue.use(Router)

const router = new Router({

    mode: 'history',

    routes: [{
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/article/:id',
        component: Article
    },
    {
        path: '/articles/create',
        component: CreateArticle
    }
    ]

})

export default router;

