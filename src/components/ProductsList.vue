<template>
    <div class="g-doc">
        <main-nav></main-nav>
        <div class="g-bread">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item >商品列表</el-breadcrumb-item>
                </el-breadcrumb>
                <h2 class="b-dis">商品列表</h2>
            </div>
        </div>
        <div class="main-con clearfix">
            <div class="side">
                <div class="categories">
                    <el-col>
                        <h3 class="m-subtitle">商品分类</h3>
                        <el-menu default-active="1" theme="dark">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-arrow-right"></i>鲜花</template>
                                <router-link :to="{name:'Product',params:{id : 6}}"><el-menu-item index="1-1">花束</el-menu-item></router-link>
                                <router-link :to="{name:'Product',params:{id : 7}}"><el-menu-item index="1-2">花盒</el-menu-item></router-link>
                                <router-link :to="{name:'Product',params:{id : 8}}"><el-menu-item index="1-3">瓶花</el-menu-item></router-link>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-arrow-right"></i>礼品</template>
                                <router-link :to="{name:'Product',params:{id : 15}}"><el-menu-item index="2-1">音乐盒</el-menu-item></router-link>
                                <router-link :to="{name:'Product',params:{id : 16}}"><el-menu-item index="2-2">水晶内雕</el-menu-item></router-link>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-arrow-right"></i>蛋糕</template>
                                <router-link :to="{name:'Product',params:{id : 12}}"><el-menu-item index="3-1">元祖</el-menu-item></router-link>
                                <router-link :to="{name:'Product',params:{id : 13}}"><el-menu-item index="3-2">好利来</el-menu-item></router-link>
                                <router-link :to="{name:'Product',params:{id : 14}}"><el-menu-item index="3-3">可颂坊</el-menu-item></router-link>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </div>
                <div class="filter">
                    <h3 class="m-subtitle">价格筛选</h3>
                     <router-link :to="{name:'Product', params:{ id : undefined,price: this.price} }">
                        <el-slider
                            v-model="price"
                            range
                            show-stops
                            :max="1000">
                        </el-slider>
                    </router-link>
                </div>
                <div class="best-sellers">
                    <h3 class="m-subtitle">热销</h3>
                    <div class="bs-sel">
                        <div class="bs-img">
                            <img src="../assets/img/seller1.jpg" alt="">
                        </div>
                        <div class="bs-star">
                            <el-rate
                                v-model="value"
                                disabled
                                text-color="#ff9900">
                            </el-rate>
                        </div>
                        <h4 class="bs-title">Luck Mason Bouquet</h4>
                        <div class="price">
                            <span>￥539.00</span> ￥<s>699.00</s>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <footers></footers>
    </div>
</template>
<script>
    import MainNav from './ChildComponents/MainNav'
    import Footers from './ChildComponents/Footers'
    export default{
        data(){
            return {
                price:[0,100]
            }
        },
        method:{
          
        },
        components:{
        	MainNav,Footers
        }
    }
</script>

<style scoped>
    .main-con {
        position: relative; 
        width: 1170px;
        margin: 0 auto;
    }

    .main-con .side {
        position: relative;
        float: left;
        margin-top: 74px;
        width: 270px;
        height: 1420px;
        overflow: hidden;
    }

    .main-con .side .categories {
        position: relative;
        width: 270px;
    }

    .main-con .side .filter {
        float: left;
        margin-top: 50px;
        margin-left: 10px;
        width: 250px;
        height: 90px;
    }

    .main-con .side .filter .slider {
        margin-top: 10px;
    }

    .main-con .side .info {
        box-sizing: border-box;
        margin-top: 50px;
        width: 270px;
    }

    .main-con .side .info .menu {
        padding: 0;
    }

    .main-con .side .best-sellers {
        float: left;
        margin-top: 50px;
        height: 458px;
        width: 270px;
    }

    .main-con .side .m-subtitle {
        width: 270px;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 20px;
    }

    .main-con .side .best-sellers .bs-sel {
        position: relative;
        margin-bottom: 20px;
        width: 270px;
        height: 120px;
    }

    .main-con .side .best-sellers .bs-sel .bs-img {
        position: absolute;
        width: 90px;
        height: 120px;
        left: 0;
        top: 0;
    }

    .main-con .side .best-sellers .bs-sel .bs-star {
        position: absolute;
        left: 100px;
        top: 18px;
    }

    .main-con .side .best-sellers .bs-sel .bs-title {
        position: absolute;
        left: 100px;
        top: 44px;
    }

    .main-con .side .best-sellers .bs-sel .price {
        position: absolute;
        left: 100px;
        top: 80px;
    }

    .main-con .main {
        position: relative;
        width: 880px;
        float: right;
        overflow: hidden;
        margin-top: 50px;
    }
    .footer{
        margin-top: 30px;
    }
</style>
