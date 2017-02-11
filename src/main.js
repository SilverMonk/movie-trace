// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import store from './vuex/store';

import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import DirectorList from './components/DirectorList';
import DirectorDetail from './components/DirectorDetail';
// 开启debug模式
Vue.config.debug = true;
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/film',
        component: FilmList,
    }, {
        path: '/film/:id',
        component: FilmDetail,
    }, {
        path: '/director',
        component: DirectorList,
    }, {
        path: '/director/:id',
        component: DirectorDetail,
    }],
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
