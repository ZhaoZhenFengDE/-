import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Index from '@/components/Index'
import Article from '@/components/Article'
import CheckOut from '@/components/CheckOut'
import ProductsList from '@/components/ProductsList'
import ProductDetail from '@/components/ProductDetail'
import AllProducts from '@/components/ChildComponents/AllProducts'
import Product from '@/components/ChildComponents/Products'

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
            component: ProductsList,
            children:[
                {
                    path:'',
                    name:'ProductsList',
                    component:AllProducts
                },
                {
                    path:'product/:id',
                    name:'Product',
                    component:Product
                }
            ]
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
