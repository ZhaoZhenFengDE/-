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
Vue.use(Element,VueAxios)
Vue.use(Vuex)

const store = new Vuex.Store({
   state:{
       items:[],
       item:[]
   },
   mutations:{
       GET_ITEMS_LIST(state,items){
           state.items  = items
       }
   },
    actions:{
       GET_ITEMS(store){
           axios.get('http://huali.com/api/preview').then((response)=>{
               store.commit('GET_ITEMS_LIST', response.data);
           })
       }
    }
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
});
