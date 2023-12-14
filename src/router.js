import { createRouter, createWebHistory } from 'vue-router';

// importo i componenti delle pagine
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Error404 from './pages/Error404.vue'
import Projects from './pages/Projects.vue'
import Contacts from './pages/Contacts.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(),

  // aggiungo active sul link attivo
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      // rotta con elemento dinamico come parametro
      path: '/project-detail/:slug',
      name: 'project-detail',
      component: ProjectDetail
    },

    // path: '/:pathMatch(.*)*' indice tutte le rotte non presenti
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});

export {router}