import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealsView from '../views/RealsView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import VelotafView from '../views/Reals/VelotafView.vue'
import FemininView from '../views/Reals/FemininView.vue'
import JPOMMIView from '../views/Reals/JPOMMIView.vue'
import TikTakView from '../views/Reals/TikTakView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                name: 'home',       component: HomeView       },
    { path: '/reals',           name: 'reals',      component: RealsView      },
    { path: '/contact',         name: 'contact',    component: ContactView    },
    { path: '/about',           name: 'about',      component: AboutView      },
    { path: '/reals/velotaf',   name: 'velotaf',    component: VelotafView    },
    { path: '/reals/feminin',   name: 'feminin',    component: FemininView    },
    { path: '/reals/jpommi',    name: 'jpommi',     component: JPOMMIView     },
    { path: '/reals/tiktak',    name: 'tiktak',     component: TikTakView     },
  ]
})

export default router