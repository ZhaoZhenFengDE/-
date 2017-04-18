<template>
    <div id="app">
        <div class="header" id="header">
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
                        <li>
                            <router-link :to="{path:'/'}"><span class="nav-item">商城</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/productlist'}"><span class="nav-item">商品列表</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/blog'}"><span class="nav-item">博客</span></router-link>
                        </li>
                        <li><a href="http://www.lthuali.com"><span class="nav-item">关于我们</span></a></li>
                        <li><a href="http://www.lthuali.com"><span class="nav-item">联系我们</span></a></li>
                    </ul>
                </div>
                <div class="sear-cart">
                    <span class="search"><img src="./assets/img/searc.png" alt="搜索"></span>
                    <span class="cart"><img src="./assets/img/cart.png" alt="购物车">
                    <i class="cart-num"></i>
                </span>
                    <div class="cart-list">

                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="u-ft">
                <dl class="u-about u-list">
                    <dt>关于我们</dt>
                    <dd>
                        <p>
                            鲜花是爱情的象征，
                            兰亭花礼苑作为鲜花电商新兴企业，一直主张年轻人要勇敢爱，“勇敢爱，是勇敢表白，
                            哪怕被拒绝也要再次大声说出我爱你；勇敢爱，是勇敢相守，即使相隔千里，也要竭尽全力，一步一步向你靠近。”
                            只要勇敢去爱，爱就会一直存在。兰亭花礼苑经营范围包括鲜花、蛋糕、礼篮、绿色花卉、品牌公仔、卡通花束、特色礼品等。
                        </p>
                    </dd>
                </dl>
                <dl class="u-info u-list">
                    <dt><span>信息</span></dt>
                    <dd class="u-item"><a href="#"><span>关于我们</span></a></dd>
                    <dd class="u-item"><a href="#"><span>联系我们</span></a></dd>
                    <dd class="u-item"><a href="#"><span>客户服务</span></a></dd>
                    <dd class="u-item"><a href="#"><span>网站地图</span></a></dd>
                    <dd class="u-item"><a href="#"><span>RSS订阅</span></a></dd>
                </dl>
                <dl class="u-acc u-list">
                    <dt><span>我的账户</span></dt>
                    <dd class="u-item"><a href="#"><span>我的订单</span></a></dd>
                    <dd class="u-item"><a href="#"><span>我的信用单</span></a></dd>
                    <dd class="u-item"><a href="#"><span>地址管理</span></a></dd>
                    <dd class="u-item"><a href="#"><span>个人信息</span></a></dd>
                    <dd class="u-item"><a href="#"><span>退出</span></a></dd>
                </dl>
                <dl class="u-optime u-list">
                    <dt>营业时间</dt>
                    <dd>周一至周五.......上午8点 - 晚上10点</dd>
                    <dd>周六和周日.......上午10点 - 晚上9点</dd>
                    <dd>假日不营业</dd>
                </dl>
            </div>
            <hr id="hr"/>
            <div class="u-cr"><span>Copyright © 2017 - All rights reserved. Powered by Lthuali.com Team</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cart: 0,
            }
        },
        created () {
            this.$store.dispatch('GET_ITEMS')
        }
    }
</script>

<style>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 12px;
        font-family: "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a:link {
        text-decoration: none;
        color: #343434;
    }

    a:hover {
        text-decoration: none;
        color: #343434;
    }

    a:active {
        text-decoration: none;
        color: #343434;
    }

    a:visited {
        text-decoration: none;
        color: #343434;
    }

    .clearfix:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .g-tb {
        height: 50px;
        background-color: #333;
        color: #999;
        font: 14px/50px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    }

    .g-tb .m-tb {
        position: relative;
        margin: 0 auto;
        width: 1170px;
        height: 50px;
    }

    .g-tb .m-tb .u-tb {
        position: absolute;
    }

    .g-tb .m-tb .u-tbl > li {
        margin-right: 20px;
    }

    .g-tb .m-tb .u-tbr {
        right: 0;
    }

    .g-tb .m-tb .u-tb .u-li {
        display: inline-block;
        color: #fff;
    }

    .g-tb .m-tb .u-tbr .u-li {
        text-align: center;
    }

    .g-tb .m-tb .u-tbr .u-li span {
        display: inline-block;
        width: 70px;
        text-align: center;
    }

    .g-tb .m-tb .u-tbr .u-sp::after {
        content: '|';
    }

    .g-tb .m-tb .u-tb .u-li a {
        color: #fff;
    }

    /* End Top Bar */
    /* LOGO AND NAV */
    .g-hd {
        position: relative;
        margin: 0 auto;
        width: 1170px;
        height: 100px;
        font: 16px/100px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    }

    .g-hd .m-lg {
        position: relative;
    }

    .g-hd .m-lg .u-logo {
        position: absolute;
        left: 0;
        top: 35px;
        width: 24px;
        height: 28px;
        background: url("./assets/img/logo.png") no-repeat;
    }

    .g-hd .m-lg .u-title {
        position: absolute;
        width: 300px;
        left: 40px;
        font-size: 24px;
        font-weight: normal;
        color: #343434;
    }

    .g-hd .m-nav {
        position: absolute;
        right: 128px;
    }

    .g-hd .m-nav .u-nav li {
        display: inline-block;
        margin-right: 30px;
    }

    .g-hd .m-nav .u-nav .nav-item {
        font-size: 16px;
    }

    .g-hd .sear-cart {
        position: absolute;
        height: 20px;
        right: 20px;
    }

    .g-hd .sear-cart > span {
        display: inline-block;
        margin-left: 22px;
        cursor: pointer;
    }

    .g-hd .sear-cart .search {
        position: relative;
        top: 2px;
    }

    .g-hd .sear-cart .cart {
        position: relative;
        width: 30px;
        height: 25px;
        top: 1px;
    }

    .g-hd .sear-cart .cart-num {
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

    .hidden {
        display: none;
    }

    /*显示购物车详情*/
    .cart-list {

    }

    .footer {
        position: relative;
        background: #333;
        height: 402px;
        overflow: hidden;
    }

    .u-ft {
        position: relative;
        width: 1170px;
        margin: 0 auto;
    }

    .u-ft .u-list {
        position: absolute;
        top: 70px;
        color: #999999;
    }

    .u-ft .u-list > dt {
        font: 16px/40px microsoft yahei;
    }

    .u-ft .u-list > dd {
        font: 14px/20px microsoft yahei;
    }

    .u-list .u-item > a span {
        color: #999999;
    }

    .u-ft .u-about {
        left: 0;
        width: 370px;

    }

    .u-ft .u-info {
        left: 500px;
        width: 130px;
    }

    .u-ft .u-acc {
        left: 700px;
        width: 130px;
    }

    .u-ft .u-optime {
        left: 900px;
    }

    #hr {
        position: absolute;
        width: 3000px;
        top: 336px;
        color: #666666;
    }

    .u-cr {
        position: absolute;
        bottom: 24px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        color: #999999;
    }

    .u-cr > span {
        display: block;
        width: 536px;
        text-align: center;
    }

</style>
