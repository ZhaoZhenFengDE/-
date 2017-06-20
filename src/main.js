// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.prototype.$ajax = axios;
Vue.use(Element, VueAxios)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        allProducts:[],
        products:{
            flowers:[],
            cakes:[],
            gifts:[],
            chocolate:[],
        },
        articles: []
    },
    mutations: {
        GET_ITEMS_LIST(state, items){
            state.allProducts = items;
            for(let i = 0; i < items.length; i++){
                switch(items[i].cate_id){
                    case 6:
                        state.products.flowers.push(items[i])
                        break;
                    case 7:
                        state.products.cakes.push(items[i])
                        break;
                    case 8:
                        state.products.gifts.push(items[i])
                        break;
                    case 9:
                        state.products.chocolate.push(items[i])
                        break;
                }
            }
        },
        GET_ARTICLES_DESC_LIST(state, items){
            state.articles = items;
        }
    },
    actions: {
        GET_ITEMS(store){
            axios.get('http://huali.com/api/preview').then((response) => {
                store.commit('GET_ITEMS_LIST', response.data);
            })
        },
        GET_ARTICLES_DESC(store){
            axios.get('http://huali.com/api/blog').then((response) => {
                store.commit('GET_ARTICLES_DESC_LIST', response.data);
            })
        }
    },
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
});
