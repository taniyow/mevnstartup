//DEPENDENCIES
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

//BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/nprogress/nprogress.css';

//NPROGRESS
import '../node_modules/nprogress/nprogress.css';

//APP.VUE
import App from './App.vue';

//COMPONENTS
import Home from './components/Home.vue'
import OurStory from './components/OurStory.vue'
import Projects from './components/Projects.vue'
import Contacts from './components/Contacts.vue'
import Confirmation from './components/Confirmation.vue'
import Edit from './components/Edit.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'OurStory',
    path: '/OurStory',
    component: OurStory
  },
  {
    name: 'Projects',
    path: '/Projects',
    component: Projects
  },
  {
    name: 'Contacts',
    path: '/Contacts',
    component: Contacts
  },
  {
    name: 'Confirmation',
    path: '/Confirmation',
    component: Confirmation
  },
  {
    name: 'Edit',
    path: '/Edit',
    component: Edit
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
