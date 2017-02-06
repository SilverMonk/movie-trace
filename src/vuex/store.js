import Vue from 'vue';
import Vuex from 'vuex';

class ErrorMsg {
    constructor(errCode, errMsg) {
        this.a = { errCode, errMsg };
    }
}

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
    film: [],
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
        if (director) {
            store.director.push(director);
        }
    },
};

const getters = {
    directorList(store) {
        return store.director;
    },
};
const actions = {
    newDirector: function(store, param) {
        return new Promise((resolve) => {
            store.commit('addDirector', param);
            resolve(new ErrorMsg(0, '牟文提'));
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
