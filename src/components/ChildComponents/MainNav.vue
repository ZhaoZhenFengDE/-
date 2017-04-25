<template>
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
                        <router-link :to="{path:'/products'}"><span class="nav-item">商品列表</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/blog'}"><span class="nav-item">博客</span></router-link>
                    </li>
                    <li><a href="http://www.lthuali.com"><span class="nav-item">关于我们</span></a></li>
                    <li><a href="http://www.lthuali.com"><span class="nav-item">联系我们</span></a></li>
                </ul>
            </div>
            <div class="sear-cart">
                <span class="search"><img src="../../assets/img/searc.png" alt="搜索"></span>
                <span class="cart"><img src="../../assets/img/cart.png" alt="购物车">
                    <i class="cart-num"></i>
                </span>
                <div class="cart-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		name:'MainNav',
		data(){
			return {
				msg: 'Hello Vue'
			}
		}
	}
</script>

<style scoped>

</style>
