// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';

import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
// 开启debug模式
Vue.config.debug = true;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: FilmList,
    }, {
        path: '/film/:id',
        component: FilmDetail,
    }],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
