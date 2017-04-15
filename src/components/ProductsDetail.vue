<template>
    <div class="detail">
        <main-nav></main-nav>
        <div class="g-bread">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path:'/productlist' }">商品列表</el-breadcrumb-item>
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
                            <img src="../assets/img/showimg.jpg" alt="">
                        </div>
                        <ul class="show-item">
                            <li class="img-item active"><img src="../assets/img/img-item.jpg" alt=""></li>
                            <li class="img-item"><img src="../assets/img/img-item.jpg" alt=""></li>
                            <li class="img-item"><img src="../assets/img/img-item.jpg" alt=""></li>
                            <li class="img-item"><img src="../assets/img/img-item.jpg" alt=""></li>
                        </ul>
                    </div>
                </div>
                <div class="d-items clearfix">
                    <h2 class="fg-name">The Cottage Bouquet</h2>
                    <ul class="shop">
                        <li class="shop-item">
                            <el-rate
                                v-model="value"
                                disabled
                                text-color="#ff9900">
                            </el-rate>
                        </li>
                        <li class="shop-item"><span>￥599.00</span> ￥<s>699.00</s></li>
                        <li class="shop-item"><span>编号：</span>9012175</li>
                        <li class="shop-item"><span>类别：</span>鲜花</li>
                        <li class="shop-item"><span>包装：</span>灰色雾面纸，白蓝细罗纹带</li>
                        <li class="shop-item"><span>材料：</span>白玫瑰11枝，绿色桔梗5枝，小菊3枝，白色石竹梅4枝，搭配尤加利适量</li>
                        <li class="shop-item"><span>花语：</span>那些芳香迷人的花儿啊，在无边的海水和长长的海岸之间，她将成为我的爱人。</li>
                        <li class="shop-item"><span>配送：</span>全国 （可配送至全国1000多城市，市区免配送费）</li>
                        <li class="shop-item"><span>附送：</span>免费附送精美贺卡，代写您的祝福。(您下单时可填写留言栏)</li>
                        <li class="shop-item ls-num">
                            <span class="s-num">数量：</span><el-input-number class="shop-num" v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                        </li>
                    </ul>
                    <div class="buy-button">
                        <el-button type="primary"><router-link :to="{path:'/checkout'}"></router-link>立即购买</el-button>
                        <el-button>加入购物车</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="infor">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="商品详情" name="first">商品详情</el-tab-pane>
                <el-tab-pane label="附加信息" name="second">附加信息</el-tab-pane>
                <el-tab-pane label="评价信息" name="third">评价信息</el-tab-pane>
            </el-tabs>
        </div>
        <div class="relate">
            <h3>相关产品</h3>
            <card></card>
        </div>
        <footers></footers>
    </div>
</template>

<script>
    import MainNav from './ChildComponents/TopNav'
    import Footers from './ChildComponents/Footers'
    import Card from './ChildComponents/Card'
	export default{
    	name:'ProductsDetail',
    	components:{
    		MainNav,Footers,Card
        },
        data(){
    		return{
    			value: 4,
                num:1
            }
        },
        methods:{
            handleChange(value){
            	this.num = value;
            }
        }
	}
</script>

<style scoped>
    .g-bread{
        min-width: 1170px;
        height: 108px;
        background:url("../assets/img/breadcrumb.jpg") no-repeat;
    }
    .bread-crumb{
        width: 1170px;
        margin: 0 auto;
    }
    .b-dis{
        position:relative;
        top: -5px;
        font-size: 30px;
        font-weight: normal;
    }
    .buy{
        width: 1170px;
        height: 800px;
        margin: 65px auto;
    }
    .details{
        width: 1170px;
        height: 800px;
    }
    .show-img{
        position:relative;
        float: left;
        width: 470px;
        height: 800px;
        overflow: hidden;
    }
    .show-img .s-img{
        position: absolute;
        left: 0;
        top: 0;
        width: 470px;
        height: 627px;
    }
    .show-img .show-item{
        position: absolute;
        bottom: 0;
        width: 480px;
        height: 144px;
    }
    .show-img .show-item .img-item{
        display: inline-block;
        width: 108px;
        height: 144px;
        margin-right: 9px;
    }
    .d-items{
        float: right;
        width: 670px;
        height: 800px;
    }
    .d-items .fg-name{
        font-size: 30px;
        height: 50px;
    }
    .shop{
        height: 400px;
        width: 670px;
    }
    .shop :nth-child(even){
        border-bottom: 1px solid #f4f4f4;
    }
    .shop-item{
        width: 670px;
        height: 35px;
        font-size: 16px;
        line-height: 30px;
    }
    .shop-item>span{
        font-size: 18px;
        line-height: 30px;
    }
    .shop-item>p{
        display: inline-block;
        font-size: 16px;
        line-height: 30px;
    }
    .ls-num{
        height: 70px;
    }
    .s-num{
        display: inline-block;
        margin-top: 30px;
    }
    .shop-item .shop-num{
        top: 10px;
    }
    .buy-button{
        margin-top: 20px;
        height: 70px;
        width: 670px;
        border-bottom: 1px solid #f4f4f4;
    }
    .infor{
        position:relative;
        width: 1170px;
        height: 284px;
        margin: 90px auto;
    }
    .relate{
        width: 1170px;
        height: 560px;
        margin: 0 auto;
        overflow: hidden;
    }
    .relate>h3{
        width: 1170px;
        height: 60px;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
    }
</style>
