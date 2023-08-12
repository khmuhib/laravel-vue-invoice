import { createRouter, createWebHistory } from "vue-router";
import Invoice from "../components/invoices/index.vue";
import NotFound from "../components/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Invoice
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFound
        }
    ]
})

export default router
