import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutViewVue from '../views/AboutView.vue';
import JobsViewVue from "../views/JobsView.vue";
import JobsDetailView from "../views/JobsDetailsView.vue";
import NotFoundViewVue from "../views/NotFoundView.vue"
import MusicViewVue from "../views/MusicView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutViewVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path:"/jobs",
      name:"jobs",
      component:JobsViewVue
    },
    {
      path:"/jobs/:jobId",
      name:"jobsdetail",
      component:JobsDetailView,
      props:true,
    },
    {
      path:"/home",
      redirect:"/"
    },
    {
      path:"/music",
      name:"music",
      component:MusicViewVue
    },
    {
      path:"/:catchAll(.*)",
      component:NotFoundViewVue
    }
  ]
})

export default router
