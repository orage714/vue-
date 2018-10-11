import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import "./reset.css";
import One from "./components/one"
import Two from "./components/two"
import Three from "./components/three"
import Four from "./components/four"
import Five from "./components/five"
import Six from "./components/six"
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
    { path: "/", component: One },
    { path: "/Two", component: Two },
    { path: "/Three", component: Three },
    { path: "/Four", component: Four },
    { path: "/Five", component: Five },
    { path: "/Six", component: Six },
   ]
var router = new VueRouter({ routes})
const app = new Vue({
    el: '#app', router,
   
    render: h => h(App)
}).$mount('#app')
