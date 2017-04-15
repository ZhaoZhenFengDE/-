import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import CheckOut from '@/components/CheckOut'
import BlogDetail from '@/components/BlogDetail'
import IndexPage from '@/components/IndexPage'
import ProductsList from '@/components/ProductsList'
import ProductsDetail from '@/components/ProductsDetail'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path:'/productlist',
            name:'ProductsList',
            component: ProductsList
        },
        {
            path:'/pud',
            name:'ProductsDetail',
            component:ProductsDetail
        },
        {
            path:'/checkout',
            name:'CheckOut',
            component:CheckOut
        },
        {
            path:'/blog',
            name:'Blog',
            component:Blog
        },
        {
            path:'/blogdetail',
            name:'BlogDetail',
            component:BlogDetail
        }
    ]
})
