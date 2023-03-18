import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealView from '../views/RealView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import VelotafView from '../views/Reals/VelotafView.vue'
import FemininView from '../views/Reals/FemininView.vue'
import JPOMMIView from '../views/Reals/JPOMMIView.vue'
import TikTakView from '../views/Reals/TikTakView.vue'
import BlueJazzView from '../views/Reals/BlueJazzView.vue'
import FildeferView from '../views/Reals/FildeferView.vue'
import AquamanView from '../views/Reals/AquamanView.vue'
import CGCracView from '../views/Reals/CGCracView.vue'
import CitadelleView from '../views/Reals/CitadelleView.vue'
import ExpoView from '../views/Reals/ExpoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                name: 'home',       component: HomeView       },
    { path: '/real',            name: 'real',       component: RealView       },
    { path: '/contact',         name: 'contact',    component: ContactView    },
    { path: '/about',           name: 'about',      component: AboutView      },
    { path: '/reals/velotaf',   name: 'velotaf',    component: VelotafView    },
    { path: '/reals/feminin',   name: 'feminin',    component: FemininView    },
    { path: '/reals/jpommi',    name: 'jpommi',     component: JPOMMIView     },
    { path: '/reals/tiktak',    name: 'tiktak',     component: TikTakView     },
    { path: '/reals/bluejazz',  name: 'bluejazz',   component: BlueJazzView   },
    { path: '/reals/fildefer',  name: 'fildefer',   component: FildeferView   },
    { path: '/reals/aquaman',   name: 'aquaman',    component: AquamanView    },
    { path: '/reals/19Crac',    name: '19Crac',     component: CGCracView     },
    { path: '/reals/citadelle', name: 'citadelle',  component: CitadelleView  },
    { path: '/reals/expo',      name: 'expo',       component: ExpoView       },
  ]
})

export default router