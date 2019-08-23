import Vue from "vue";
import Router from "vue-router";

// Pages
import Home from "@/components/Home";

import Container from "@/components/Container";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Default",
            component: Container,
            children: [
                {
                    path: "Home",
                    name: "Home",
                    component: Home
                }
            ]
        }
    ]
});