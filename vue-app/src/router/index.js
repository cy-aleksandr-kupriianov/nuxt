import { createRouter, createWebHistory } from 'vue-router';
import P1 from '../components/PageP1.vue';
import P2 from '../components/PageP2.vue';
import P3 from '../components/PageP3.vue';
import P4 from '../components/PageP4.vue';
import P5 from '../components/PageP5.vue';
import P6 from '../components/PageP6.vue';
import P7 from '../components/PageP7.vue';
import P8 from '../components/PageP8.vue';
import P9 from '../components/PageP9.vue';

const routes = [
    { path: '/p1', name: 'P1', component: P1 },
    { path: '/p2', name: 'P2', component: P2 },
    { path: '/p3', name: 'P3', component: P3 },
    { path: '/p4', name: 'P4', component: P4 },
    { path: '/p5', name: 'P5', component: P5 },
    { path: '/p6', name: 'P6', component: P6 },
    { path: '/p7', name: 'P7', component: P7 },
    { path: '/p8', name: 'P8', component: P8 },
    { path: '/p9', name: 'P9', component: P9 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;