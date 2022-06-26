import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import AddProperty from '../views/AddProperty.vue';
import DetailView from '../views/DetailView.vue';
import AboutView from '../views/AboutView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import ConditionsView from '../views/TermsView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/add-property',
    name: 'addproperty',
    component: AddProperty
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/privacy',
    name:'privacy',
    component: PrivacyView
  },
  {
    path:'/term-conditions',
    name:'term conditions',
    component: ConditionsView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({behavior: 'smooth', left: 0, top: 0 })
      }, 100)
    })
  },
})

export default router
