import home from '@/views/home/home.vue';
import ParkService from '@/views/park-service/park-service.vue';
import EnterpriseStorm from '@/views/enterprise-storm/enterprise-storm.vue';
import MakerPort from '@/views/maker-port/maker-port.vue';
import Cooperation from '@/views/cooperation/cooperation.vue';
import PolicyRelease from '@/views/policy-release/policy-release.vue';
import Contact from '@/views/contact/contact.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
  { path: '/service', component: ParkService },
  { path: '/enterprise-storm', component: EnterpriseStorm },
  { path: '/maker-port', component: MakerPort },
  { path: '/cooperation', component: Cooperation },
  { path: '/policy-release', component: PolicyRelease },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
