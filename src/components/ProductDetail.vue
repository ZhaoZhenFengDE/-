<template>
    <div class="detail">
        <main-nav></main-nav>
        <div class="item">
            <div class="g-bread">
                <div class="bread-crumb">
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path:'/products' }">商品列表</el-breadcrumb-item>
                        <el-breadcrumb-item>商品详情</el-breadcrumb-item>
                    </el-breadcrumb>
                    <h2 class="b-dis">商品详情</h2>
                </div>
            </div>
            <div class="buy">
                <div class="details clearfix">
                    <div class="d-img">
                        <div class="show-img">
                            <div class="s-img">
                                <img :src=product.commodity_pic alt="" width="100%">
                            </div>
                            <ul class="show-item">
                                <li class="img-item active"><img width="100%" :src=product.commodity_pic alt=""></li>
                                <li class="img-item"><img width="100%" :src=product.commodity_pic alt=""></li>
                                <li class="img-item"><img width="100%" :src=product.commodity_pic alt=""></li>
                                <li class="img-item"><img width="100%" :src=product.commodity_pic alt=""></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-items clearfix">
                        <h2 class="fg-name">{{ product.commodity_name}}</h2>
                        <ul class="shop">
                            <li class="shop-item">
                                <el-rate
                                    v-model="product.star"
                                    disabled
                                    text-color="#ff9900">
                                </el-rate>
                            </li>
                            <li class="shop-item"><span>￥{{ product.price }}</span> <s>￥ {{ product.old_price }}</s></li>
                            <li class="shop-item"><span>编号：</span>{{ product.commodity_id }}</li>
                            <li class="shop-item"><span>类别：</span>{{ product.category }}</li>
                            <li class="shop-item"><span>包装：</span>{{ product.package }}</li>
                            <li class="shop-item"><span>材料：</span>{{ product.material }}</li>
                            <li class="shop-item"><span>花语：</span>{{ product.flw_lan }}</li>
                            <li class="shop-item"><span>配送：</span>{{ product.distribution }}</li>
                            <li class="shop-item"><span>附送：</span>{{ product.include}}</li>
                            <li class="shop-item ls-num">
                                <span class="s-num">数量：</span>
                                <el-input-number class="shop-num" v-model="num" :min="1"
                                                 :max="10"></el-input-number>
                            </li>
                        </ul>
                        <div class="buy-button">
                            <el-button type="primary">
                                <router-link :to="{path:'/checkout'}">立即购买</router-link>
                            </el-button>
                            <el-button>加入购物车</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="infor">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="商品详情" name="first">商品详情</el-tab-pane>
                    <el-tab-pane label="附加信息" name="second">附加信息</el-tab-pane>
                    <el-tab-pane label="评价信息" name="third">评价信息</el-tab-pane>
                </el-tabs>
            </div>
            <div class="relate">
                <h3>相关产品</h3>
                <el-row>
                    <el-col :span="6" v-for="(item,index) in products.flowers">
                        <router-link :to="{ name:'ProductDetail', params : { id: item.commodity_id }}">
                            <el-card class="card" :body-style="{padding:'0'}">
                                <img :src="item.commodity_pic" class="image">
                                <h3>{{item.commodity_name}}</h3>
                                <span>￥{{item.price}}</span> ￥<s>{{item.old_price}}</s>
                                <div class="star">
                                    <el-rate
                                        v-model = item.star
                                        disabled
                                        text-color="#ff9900">
                                    </el-rate>
                                </div>
                            </el-card>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
    import MainNav from './ChildComponents/MainNav'
    import Footers from './ChildComponents/Footers'
    export default{
        created () {
            this.fetchData();
        },
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        data () {
            return {
                activeName:'first',
                product:null,
                loading: false,
                error: null,
                num:1
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = this.product = null;
                this.loading = true;
                this.$ajax.get('http://huali.com/api/product/'+ this.$route.params.id).then((response)=>{
                    this.product = response.data;
                    this.loading = false;
                });
            }
        },
        components:{
        	MainNav,Footers
        }
    }
</script>

<style>

    .details {
        width: 1170px;
        height: 800px;
    }

    .buy {
        width: 1170px;
        height: 800px;
        margin: 65px auto;
    }

    .show-img {
        position: relative;
        float: left;
        width: 470px;
        height: 800px;
        overflow: hidden;
    }

    .show-img .s-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 470px;
        height: 627px;
    }

    .show-img .show-item {
        position: absolute;
        bottom: 0;
        width: 480px;
        height: 144px;
    }

    .show-img .show-item .img-item {
        display: inline-block;
        width: 108px;
        height: 144px;
        margin-right: 9px;
    }

    .d-items {
        float: right;
        width: 670px;
        height: 800px;
    }

    .d-items .fg-name {
        font-size: 30px;
        height: 50px;
    }

    .shop {
        height: 400px;
        width: 670px;
    }

    .shop :nth-child(even) {
        border-bottom: 1px solid #f4f4f4;
    }

    .shop-item {
        width: 670px;
        height: 35px;
        overflow: hidden;
        font-size: 16px;
        line-height: 30px;
    }

    .shop-item > span {
        font-size: 18px;
        line-height: 30px;
    }

    .shop-item > p {
        display: inline-block;
        font-size: 16px;
        line-height: 30px;
    }

    .ls-num {
        height: 70px;
    }

    .s-num {
        display: inline-block;
        margin-top: 30px;
    }

    .shop-item .shop-num {
        top: 10px;
    }

    .buy-button {
        margin-top: 20px;
        height: 70px;
        width: 670px;
        border-bottom: 1px solid #f4f4f4;
    }

    .infor {
        position: relative;
        width: 1170px;
        height: 284px;
        margin: 90px auto;
    }

    .relate {
        width: 1170px;
        height: 560px;
        margin: 0 auto;
        overflow: hidden;
    }

    .relate > h3 {
        width: 1170px;
        height: 60px;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
    }

    .card {
        display: inline-block;
        width: 270px;
        height: 460px;
        text-align: center;
        margin: 8px;
    }
    img + h3 {
        width: 270px;
        margin: 15px auto;
        font-size: 14px;
        font-weight: normal;
    }

    .star {
        margin: 10px;
    }
</style>
