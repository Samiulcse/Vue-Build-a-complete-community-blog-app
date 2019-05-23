
import Vue from "vue"

import Router from "vue-router"


import Login from "./view/Login.vue"
import Signup from "./view/Signup.vue"


Vue.use(Router)

const router = new Router({

    routes: [{
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    }
    ]

})

export default router;

