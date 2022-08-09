import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About';
import Home from '../views/Home';

const routes = [
  { path: '/about', component: About, name: 'About' },
  { path: '/', component: Home, name: 'Home' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
