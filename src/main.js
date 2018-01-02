import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomeButton from './HomeButton.vue'
import LocateButton from './LocateButton.vue'

Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/home-button', component: HomeButton },
  { path: '/locate-button', component: LocateButton },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
