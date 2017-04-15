<template>
    <div class="g-doc">
        <main-nav></main-nav>
        <div class="g-bread">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
                </el-breadcrumb>
                <h2 class="b-dis">商品列表</h2>
            </div>
        </div>
        <div class="main-con">
            <div class="side">
                <div class="categories">
                    <el-col>
                        <h3 class="m-subtitle">商品分类</h3>
                        <el-menu default-active="1" @open="handleOpen" @close="handleClose" theme="dark">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-arrow-right"></i>鲜花</template>
                                <el-menu-item index="1-1">花束</el-menu-item>
                                <el-menu-item index="1-2">家居装饰</el-menu-item>
                                <el-menu-item index="1-3">松散花</el-menu-item>
                                <el-menu-item index="1-4">特价</el-menu-item>
                                <el-menu-item index="1-5">花瓶</el-menu-item>
                                <el-menu-item index="1-6">舞会及特别活动</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-arrow-right"></i>礼品</template>
                                <el-menu-item index="1-1">花束</el-menu-item>
                                <el-menu-item index="1-2">家居装饰</el-menu-item>
                                <el-menu-item index="1-3">松散花</el-menu-item>
                                <el-menu-item index="1-4">特价</el-menu-item>
                                <el-menu-item index="1-5">花瓶</el-menu-item>
                                <el-menu-item index="1-6">舞会及特别活动</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-arrow-right"></i>杂物</template>
                                <el-menu-item index="1-1">花束</el-menu-item>
                                <el-menu-item index="1-2">家居装饰</el-menu-item>
                                <el-menu-item index="1-3">松散花</el-menu-item>
                                <el-menu-item index="1-4">特价</el-menu-item>
                                <el-menu-item index="1-5">花瓶</el-menu-item>
                                <el-menu-item index="1-6">舞会及特别活动</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </div>
                <div class="filter">
                    <h3 class="m-subtitle">价格筛选</h3>
                    <el-slider class="slider"
                               v-model="value"
                               :step="5">
                    </el-slider>
                </div>
                <div class="info">
                    <el-col>
                        <h3 class="m-subtitle">信息</h3>
                        <el-menu class="menu" default-active="1" @open="handleOpen" @close="handleClose" theme="dark">
                            <el-menu-item index="1-1"><i class="el-icon-arrow-right"></i>选项1</el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-arrow-right"></i>选项2</el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-arrow-right"></i>选项3</el-menu-item>
                            <el-menu-item index="1-4"><i class="el-icon-arrow-right"></i>选项1</el-menu-item>
                            <el-menu-item index="1-5"><i class="el-icon-arrow-right"></i>导航二</el-menu-item>
                            <el-menu-item index="1-6"><i class="el-icon-arrow-right"></i>导航三</el-menu-item>
                        </el-menu>
                    </el-col>
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
            <div class="main">
                <card></card>
                <div class="page">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>
<script>
    import MainNav from './ChildComponents/TopNav'
    import Footers from './ChildComponents/Footers'
    import Card from './ChildComponents/Card'
    export default{
        data(){
            return {
                value: 0
            }
        },
        components: {
            MainNav, Footers, Card
        },
    }
</script>
<style scoped>
    .g-bread {
        min-width: 1170px;
        height: 108px;
        background: url("../assets/img/breadcrumb.jpg") no-repeat;
    }

    .bread-crumb {
        width: 1170px;
        margin: 0 auto;
    }
    .b-dis{
        position: relative;
        top: -5px;
        font-size: 30px;
        font-weight: normal;
    }

    .main-con {
        position: relative;
        width: 1170px;
        height: 1530px;
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
        width: 270px;
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
        height: 1480px;
    }

    .main-con .main .page {
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .footer{
        margin-top: 30px;
    }
</style>
