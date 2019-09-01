import Vue from 'vue'
import VueRouter from 'vue-router'
import Circle1 from './components/Circle1.vue'
import Circle2 from './components/Circle2.vue'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Circle1 },
    { path: '/circle1', component: Circle1 },
    { path: '/circle2', component: Circle2 },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
