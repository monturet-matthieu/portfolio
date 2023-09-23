import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '../views/HomeView.vue'
import RealsView    from '../views/RealsView.vue'
import ContactView  from '../views/ContactView.vue'
import AboutView    from '../views/AboutView.vue'
import VelotafView  from '../views/VelotafView.vue'
import FemininView  from '../views/FemininView.vue'
import JPOMMIView   from '../views/JPOMMIView.vue'
import TikTakView   from '../views/TikTakView.vue'
import JHMView      from '../views/JHMView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                name: 'home',       component: HomeView       },
    { path: '/reals',           name: 'reals',      component: RealsView      },
    { path: '/contact',         name: 'contact',    component: ContactView    },
    { path: '/about',           name: 'about',      component: AboutView      },
    { path: '/velotaf',         name: 'velotaf',    component: VelotafView    },
    { path: '/feminin',         name: 'feminin',    component: FemininView    },
    { path: '/jpommi',          name: 'jpommi',     component: JPOMMIView     },
    { path: '/tiktak',          name: 'tiktak',     component: TikTakView     },
    { path: '/jhm',             name: 'jhm',        component: JHMView        },
  ]
})

export default router