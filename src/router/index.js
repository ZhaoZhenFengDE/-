import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Index from '@/components/Index'
import Article from '@/components/Article'
import CheckOut from '@/components/CheckOut'
import ProductsList from '@/components/ProductsList'
import ProductDetail from '@/components/ProductDetail'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path:'/products',
            name:'ProductsList',
            component: ProductsList,
        },
        {
            path:"/products/pud/:id",
            name:'ProductDetail',
            component:ProductDetail
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
            path:'/article/:id',
            name: 'Article',
            component: Article
        }
    ]
})
