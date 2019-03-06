import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Projects from "./views/Projects.vue"
import Timeline from "./views/Timeline.vue"
import News from "./views/News.vue"
import Chat from "./views/Chat.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("./views/Projects.vue")
            //component: Projects
        },
        {
            path: "/timeline",
            name: "timeline",
            component: () => import("./views/Timeline.vue")
            //component: Timeline
        },
        {
            path: "/news",
            name: "news",
            component: News
        },
        {
            path: "/chat",
            name: "chat",
            component: Chat
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
})
