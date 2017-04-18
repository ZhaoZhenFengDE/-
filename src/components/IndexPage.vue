<template>
    <div class="g-doc">
        <div class="banner">
            <router-link to="/products/pud">
                <div class="u-txt">
                    <h3 class="classify">FLOWERS</h3>
                    <h2 class="u-txt-hd">花头饰带</h2>
                    <p class="u-txt-art">
                        玫瑰是爱情的最佳代言人，不少新人拍婚纱照，首选玫瑰，但玫瑰的颜色不同含义也有所区别：红玫瑰代表：深爱着你；粉色玫瑰表示：动情在心、爱的宣言；白玫瑰则表示：天真、纯洁、尊敬的含义。</p>
                    <a class="a-shop" href="www.lthuali.com"><span>现在购买</span></a>
                </div>
            </router-link>
        </div>
        <div class="g-pro">
            <div class="item article article-l">
                <h2 class="t-tit">Flowers For the</h2>
                <h2>BIRTHDAY & GIFTS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <a href="">立即购买</a>
            </div>
            <div class="item pic-r">
                <img src="../assets/img/flowers.jpg" alt="生日或礼物用花">
            </div>
            <div class="item pic-l">
                <img src="../assets/img/widding.jpg" alt="结婚纪念日鲜花">
            </div>
            <div class="item article article-r">
                <h2 class="t-tit">Flowers For the</h2>
                <h2>WEDDING DAY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do sed do Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do sed do Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do</p>
                <a href="">立即购买</a>
            </div>
        </div>
        <div class="g-sort">
            <el-tabs id="sort" v-model="activeName">
                <el-tab-pane label="花束" name="first">
                    <el-row>
                        <el-col :span="6" v-for="(item,index) in items">
                            <router-link :to="{name:'ProductsDetail',query: { id: item.commodity_id }}">
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
                </el-tab-pane>
                <el-tab-pane label="婚礼" name="second">
                    <el-row>
                        <el-col :span="6" v-for="item in items">
                            <el-card class="card" :body-style="{padding:'0'}">
                                <img :src = "item.commodity_pic" class="image">
                                <h3>{{item.commodity_name}}</h3>
                                <span>￥{{item.price}}</span>￥<s>{{item.old_price}}</s>
                                <div class="star">
                                    <el-rate
                                        v-model = item.star
                                        disabled
                                        text-color="#ff9900">
                                    </el-rate>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="家居装饰" name="third">
                    <el-row>
                        <el-col :span="6" v-for="(item,index) in items">
                            <el-card class="card" :body-style="{padding:'0'}">
                                <img :src = "item.commodity_pic" class="image">
                                <h3>{{item.commodity_name}}</h3>
                                <span>￥{{item.price}}</span>￥<s>{{item.old_price}}</s>
                                <div class="star">
                                    <el-rate
                                        v-model= item.star
                                        disabled
                                        text-color="#ff9900">
                                    </el-rate>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="流行" name="fourth">
                    <el-row>
                        <el-col :span="6" v-for="item in items">
                            <el-card class="card" :body-style="{padding:'0'}">
                                <router-link :to="{ path: '/products/pud/', query: { id: item.commodity_id }}">
                                    <img :src = "item.commodity_pic" class="image">
                                    <h3>{{item.commodity_name}}</h3>
                                    <span>￥{{item.price}}</span>￥<s>{{item.old_price}}</s>
                                    <div class="star">
                                        <el-rate
                                            v-model= item.star
                                            disabled
                                            text-color="#ff9900">
                                        </el-rate>
                                    </div>
                                </router-link>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="g-sign">
            <div class="sign">
                <h4 class="h-tit">订阅消息</h4>
                <div class="s-subtitle">订阅最新的产品更新和活动信息</div>
                <el-input class="s-input" placeholder="请输入邮箱"></el-input><el-button class="s-btn" type="primary">订阅</el-button>
            </div>
        </div>
        <div class="g-gallery">
            <div class="gallery">
                <h4 class="h-tit">Gallery</h4>
                <div class="s-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod
            ut labore et dolore</div>
                <ul class="gal-list">
                    <li class="gal-item"><img src="../assets/img/gallery1.jpg" alt=""></li>
                    <li class="gal-item"><img src="../assets/img/gallery2.jpg" alt=""></li>
                    <li class="gal-item"><img src="../assets/img/gallery3.jpg" alt=""></li>
                    <li class="gal-item"><img src="../assets/img/gallery4.jpg" alt=""></li>
                    <li class="gal-item"><img src="../assets/img/gallery5.jpg" alt=""></li>
                    <li class="gal-item"><img src="../assets/img/gallery6.jpg" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
            	activeName:'first',
            }
        },
        computed:{
            items(){
                return this.$store.state.items;
            }
        }
    }
</script>

<style scoped>
    .banner {
        position: relative;
        min-width: 1170px;
        height: 732px;
        background: url("../assets/img/banner.jpg") no-repeat center;
    }
    .u-txt {
        position: absolute;
        left: 10%;
        top: 40%;
        z-index: 50;
    }
    .u-txt .u-txt-hd {
        font: 44px/100px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    }
    .u-txt .u-txt-art {
        width: 630px;
        font: 14px/25px "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
        margin-bottom: 44px;
    }
    .u-txt .classify {
        width: 150px;
        height: 32px;
        margin: 0 auto;
        text-align: center;
        background: #e6c302;
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;
        color: #fff;
    }
    .u-txt .a-shop {
        display: block;
        width: 160px;
        height: 68px;
        border: 2px solid #000;
        text-align: center;
        font: 20px/68px microsoft yahei;
    }
    .u-txt .a-shop > span {
        font-size: 18px;
        color: #000;
    }
    .g-pro {
        position: relative;
        margin: 60px auto;
        width: 1170px;
        height: 840px;
    }
    .g-pro .item {
        position:absolute;
        width: 585px;
        height: 420px;
        background: #000;
    }
    .g-pro .article-l{
        background: #f7f7f7;
    }
    .g-pro .pic-r{
        top: 0;
        right: 0;
    }
    .g-pro .pic-l{
        bottom: 0;
        left: 0;
    }
    .g-pro .article-r{
        right: 0;
        bottom: 0;
        background: #f7f7f7;
    }
    .g-pro .item .t-tit{
        font-size: 24px;
        line-height: 35px;
    }
    .g-pro .item .t-tit+h2{
        font-size: 36px;
        line-height: 45px;
    }
    .g-pro .article{
        box-sizing: border-box;
        padding-left: 84px;
        padding-top: 88px;
    }
    .g-pro .article>p{
        width: 450px;
        height: 100px;
        font-size: 14px;
        line-height: 24px;
        overflow: hidden;
    }
    .g-pro .article>a{
        display: block;
        width: 168px;
        height: 46px;
        text-align: center;
        background: #e6c302;
        font-size: 16px;
        color: #fff;
        line-height: 46px;
    }
    .g-sort{
        position:relative;
        width: 1170px;
        height: 1080px;
        margin: 0 auto;
    }
    #sort{
        width: 1170px;
        margin: 0 auto;
    }
    .g-sign{
        min-width: 1170px;
        height: 340px;
        background-color: #f7f7f7;
    }
    .g-sign .sign{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 80px 0;
        width: 570px;
        height: 340px;
        margin: 0 auto;
    }
    .h-tit{
        font-size: 32px;
        font-weight: normal;
        text-align: center;
        line-height: 32px;
        margin-bottom: 20px;
    }
    .s-subtitle{
        font-size: 14px;
        text-align: center;
        margin-bottom: 50px;
    }
    .g-sign .sign .s-input{
        font-size: 14px;
        width: 400px;
        height: 40px;
        border-radius: 0;
    }
    .g-sign .sign .s-btn{
        font-size: 14px;
        width: 160px;
        border-radius: 0;
    }
    .g-gallery{
        min-width: 1170px;
        height: 520px;
    }
    .g-gallery .gallery{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 1170px;
        margin: 0 auto;
        padding-top: 94px;
        padding-bottom: 112px;
    }
    .g-gallery .gallery .gal-list{
        width:1170px;
        height:170px;
    }
    .g-gallery .gallery .gal-list .gal-item{
        display: inline-block;
        width: 170px;
        height: 170px;
        margin: 10px;
        -webkit-box-shadow: 0 1px 0 1px #ccc;
        -moz-box-shadow: 0 1px 0 1px #ccc;
        box-shadow: 0 1px 0 1px #ccc;
    }
    .g-gallery .gallery .gal-list .gal-item>img{
        width: 100%;
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
