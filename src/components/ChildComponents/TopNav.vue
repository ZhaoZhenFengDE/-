<template>
    <div class="header" id="header" v-once>
        <div class="g-tb">
            <div class="m-tb">
                <ul class="u-tb u-tbl">
                    <li class="u-li">CHN</li>
                    <li class="u-li">CNY</li>
                    <li class="u-li">联系我们 : 15738826526</li>
                </ul>
                <ul class="u-tb u-tbr">
                    <li class="u-li u-sp"><a href="#"><span>账户</span></a></li>
                    <li class="u-li u-sp"><a href="#"><span>心愿单</span></a></li>
                    <li class="u-li u-sp"><a href="#"><span>登录</span></a></li>
                    <li class="u-li"><a href="#"><span>注册</span></a></li>
                </ul>
            </div>
        </div>
        <div class="g-hd">
            <div class="m-lg">
                <a href="http://www.lthuali.com">
                    <span class="u-logo"></span>
                    <h1 class="u-title">兰亭花礼苑</h1>
                </a>
            </div>
            <div class="m-nav">
                <ul class="u-nav">
                    <li><a href=""><span class="nav-item">首页</span></a></li>
                    <li><router-link :to="{path:'/'}"><span class="nav-item">商城</span></router-link></li>
                    <li><router-link :to="{path:'/productlist'}"><span class="nav-item">商品列表</span></router-link></li>
                    <li><router-link :to="{path:'/blog'}"><span class="nav-item">博客</span></router-link></li>
                    <li><a href="http://www.lthuali.com"><span class="nav-item">关于我们</span></a></li>
                    <li><a href="http://www.lthuali.com"><span class="nav-item">联系我们</span></a></li>
                </ul>
            </div>
            <div class="sear-cart">
                <span class="search"><img src="../../assets/img/searc.png" alt="搜索"></span>
                <span class="cart"><img src="../../assets/img/cart.png" alt="购物车">
                    <i class="cart-num" v-model="getCartNum" v-on:clock="showCart">{{ cart }}</i>
                </span>
                <div class="cart-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopNav',
        data(){
        	return {
        		cart:0,
                hidden:true,
            }
        },
        methods:{
        	showCart(){

            }
        },
        computed:{
        	getCartNum(){
        		this.cart = 3;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* Top Bar */
    .g-tb{
        height:50px;
        background-color: #333;
        color: #999;
        font: 14px/50px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    }
    .g-tb .m-tb{
        position: relative;
        margin: 0 auto;
        width:1170px;
        height:50px;
    }
    .g-tb .m-tb .u-tb{
        position: absolute;
    }
    .g-tb .m-tb .u-tbl>li{
        margin-right: 20px;
    }
    .g-tb .m-tb .u-tbr{
        right:0;
    }
    .g-tb .m-tb .u-tb .u-li{
        display: inline-block;
        color: #fff;
    }
    .g-tb .m-tb .u-tbr .u-li{
        text-align: center;
    }
    .g-tb .m-tb .u-tbr .u-li span{
        display:inline-block;
        width:70px;
        text-align: center;
    }
    .g-tb .m-tb .u-tbr .u-sp::after{
        content:'|';
    }
    .g-tb .m-tb .u-tb .u-li a{
        color: #fff;
    }
    /* End Top Bar */
    /* LOGO AND NAV */
    .g-hd{
        position: relative;
        margin: 0 auto;
        width: 1170px;
        height:100px;
        font:16px/100px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    }
    .g-hd .m-lg{
        position: relative;
    }
    .g-hd .m-lg .u-logo{
        position: absolute;
        left: 0;
        top: 35px;
        width: 24px;
        height: 28px;
        background: url("../../assets/img/logo.png") no-repeat;
    }
    .g-hd .m-lg .u-title{
        position: absolute;
        width:300px;
        left: 40px;
        font-size: 24px;
        font-weight: normal;
        color: #343434;
    }
    .g-hd .m-nav{
        position: absolute;
        right: 128px;
    }
    .g-hd .m-nav .u-nav li{
        display: inline-block;
        margin-right: 30px;
    }
    .g-hd .m-nav .u-nav .nav-item{
        font-size: 16px;
    }
    .g-hd .sear-cart{
        position:absolute;
        height: 20px;
        right: 20px;
    }
    .g-hd .sear-cart>span{
        display: inline-block;
        margin-left: 22px;
        cursor: pointer;
    }
    .g-hd .sear-cart .search{
        position: relative;
        top: 2px;
    }
    .g-hd .sear-cart .cart{
        position:relative;
        width:30px;
        height: 25px;
        top: 1px;
    }
    .g-hd .sear-cart .cart-num{
        display: inline-block;
        position: absolute;
        top: 30px;
        right: 2px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #e6c302;
        font-style: normal;
        line-height: 18px;
        text-align: center;
        color: #fff;
    }
    .hidden{
        display: none;
    }
    /*显示购物车详情*/
    .cart-list{

    }

</style>
