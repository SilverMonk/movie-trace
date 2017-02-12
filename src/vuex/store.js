import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.prototype.$http = axios.create({
    baseURL: '/nestfilm/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [function(data) {
        return JSON.stringify(data);
    }],
});

const util = {
    isArr: (obj) => {
        if (obj instanceof Array) {
            return true;
        }
        return false;
    },
    isObj: (obj) => {
        if (obj instanceof Object) {
            return true;
        }
        return false;
    },
};

// class ErrorMsg {
//     constructor(errCode, errMsg) {
//         this.a = { errCode, errMsg };
//     }
// }
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
    film: [],
    filmcount: 0,
    director: [{
        id: 0,
        'namecn': '冯小刚',
        'nameen': 'Morten Tyldum',
        'sex': '男',
        'imdbno': '',
        'birthAddr': '北京大兴区',
        'introduction': '冯小刚，1958年出生于北京，祖籍湖南省湘潭市，中国内地导演、编剧、演员。',
        'avatarSmall': 'http://y1.ifengimg.com/a/2014_49/fe281bd8e912f1a.jpg',
        'avatarLarge': 'http://y1.ifengimg.com/a/2014_49/fe281bd8e912f1a.jpg',
        'avatarMedium': 'http://y1.ifengimg.com/a/2014_49/fe281bd8e912f1a.jpg',
        'workTag': '导演/编剧/演员',
        'birthDate': '1958-03-18',
    }],
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    addDirector(store, director) {
        if (util.isArr(director)) {
            store.director = director.reduce((coll, item) => {
                coll.push(item);
                return coll;
            }, store.director);
        } else if (util.isObj(director)) {
            store.director.push(director);
        }
    },
    addFilm(store, res) {
        if (res.count != null) {
            store.filmcount = res.count;
        }
        let film = res.data;
        if (util.isArr(film)) {
            store.film = film.reduce((coll, item) => {
                coll.push(item);
                return coll;
            }, store.film);
        } else if (util.isObj(film)) {
            store.film.push(film);
        }
    },
};

const getters = {
    directorList(store) {
        return store.director;
    },
    filmList(store) {
        return store.film;
    },
};
const actions = {
    newDirector: function(store, param) {
        return axios.get('/director/insert', param).then((response) => {
            if (response.errCode === 0) {
                store.commit('addDirector', response.data.data);
            } else {
                console.log(response.errMsg);
            }
        });
    },
    getFilmList: function(store, param) {
        return axios.get('/nestfilm/film/list', param).then((response) => {
            if (response.errCode === 0) {
                store.commit('addFilm', response.data.data);
            } else {
                console.log(response.errMsg);
            }
        });
    },
    // increment: function(store, param) {
    //     return new Promise((resolve) => {
    //         store.commit('INCREMENT', param);
    //         resolve({ errCode: 0 });
    //     });
    // },

};
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
