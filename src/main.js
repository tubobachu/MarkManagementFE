import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routers"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {store} from "./store/store";
import VueSession from "vue-session/index.esm";

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueSession)
const router = new VueRouter({
    mode: 'history',
    routes
})
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
