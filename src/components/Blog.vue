<template>
    <div class="blog">
        <div class="g-bread">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path:'/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>博客</el-breadcrumb-item>
                </el-breadcrumb>
                <h2 class="b-dis">博客首页</h2>
            </div>

        </div>
        <div class="main-con clearfix">
            <div class="side clearfix">
                <div class="search">
                    <h3 class="m-subtitle">博客搜索</h3>
                    <el-input
                        placeholder="搜索"
                        icon="search"
                        v-model="search"
                        :on-icon-click="handleIconClick">
                    </el-input>
                </div>
                <div class="b-categories">
                    <el-col>
                        <h3 class="m-subtitle">博客分类</h3>
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
                <div class="recent-post">
                    <h3 class="m-subtitle">最近博客</h3>
                    <dl class="post-item">
                        <dt class="blog-title">123456</dt>
                        <dd class="b-r-img"><img src="../assets/img/blogimg.jpg" alt=""></dd>
                        <dd class="post-time"><i class="el-icon-date"></i><span v-model="time">{{time}}</span></dd>
                    </dl>
                    <dl class="post-item">
                        <dt class="blog-title">123456</dt>
                        <dd class="b-r-img"><img src="../assets/img/blogimg.jpg" alt=""></dd>
                        <dd class="post-time"><i class="el-icon-date"></i><span v-model="time">{{time}}</span></dd>
                    </dl>
                    <dl class="post-item">
                        <dt class="blog-title">123456</dt>
                        <dd class="b-r-img"><img src="../assets/img/blogimg.jpg" alt=""></dd>
                        <dd class="post-time"><i class="el-icon-date"></i><span v-model="time">{{time}}</span></dd>
                    </dl>
                    <dl class="post-item">
                        <dt class="blog-title">123456</dt>
                        <dd class="b-r-img"><img src="../assets/img/blogimg.jpg" alt=""></dd>
                        <dd class="post-time"><i class="el-icon-date"></i><span v-model="time">{{time}}</span></dd>
                    </dl>
                    <dl class="post-item">
                        <dt class="blog-title">123456</dt>
                        <dd class="b-r-img"><img src="../assets/img/blogimg.jpg" alt=""></dd>
                        <dd class="post-time"><i class="el-icon-date"></i><span v-model="time">{{time}}</span></dd>
                    </dl>
                </div>
                <div class="archives">
                    <h3 class="m-subtitle">档案</h3>
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div>
                <div class="popular-tags">
                    <h3 class="m-subtitle">热门标签</h3>
                    <el-tag type="success">鲜花礼品</el-tag>
                </div>
            </div>
            <div class="blog-main clearfix">
                <div class="latest-blog">
                    <div class="blog-banner">
                        <img src="../assets/img/blogbanner.jpg" alt="">
                        <div class="blog-detail"><span>作者：</span> admain <i class="el-icon-date"></i> 10 oct. 2016</div>
                    </div>
                    <article class="blog-article">
                        <header class="b-header"><h4>Nullam ullamcorper nisl quis ornare molestie</h4></header>
                        <section class="b-sec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</section>
                        <footer class="b-foot">Read More ></footer>
                    </article>
                </div>
                <div class="blog-card clearfix">
                    <el-row>
                        <el-col :span="8" v-for="(o, index) in 6">
                            <el-card class="blog-card-item" :body-style="{padding:'0'}">
                                <img src="../assets/img/articleimg.jpg" class="image">
                                <div>
                                    <h5>Turpis at eleifend elit Aenean porta ac sed faucibus</h5>
                                    <p class="b-c-i-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                </div>
                                <span class="read-more"><router-link :to="{path:'/blogdetail'}">Read More ></router-link></span>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="page">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return {
				msg: 'Hello Vue',
                search:'',
                time: new Date(),
			}
		}
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
    .b-dis {
        position: relative;
        top: -5px;
        font-size: 30px;
        font-weight: normal;
    }
    .main-con {
        position: relative;
        width: 1170px;
        height: 1830px;
        margin: 0 auto;
    }
    .main-con .side {
        position: relative;
        float: left;
        margin-top: 60px;
        width: 270px;
        height: 1300px;
        overflow: hidden;
    }
    .main-con .side .m-subtitle {
        width: 270px;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 20px;
    }
    .main-con .side .b-categories{
        position: relative;
        margin-top: 20px;
    }
    .main-con .side .recent-post{
        position: relative;
        float: left;
        margin-top: 20px;
        width: 270px;
    }
    .main-con .side .recent-post .post-item{
        position:relative;
        margin-bottom: 26px;
        width: 270px;
        height: 54px;
    }
    .main-con .side .recent-post .post-item .blog-title{
        position: absolute;
        left: 100px;
        top: 5px;
        font-size: 14px;
    }
    .main-con .side .recent-post .post-item .b-r-img{
        position: absolute;
        left: 0;
        width: 70px;
        height: 54px;
    }
    .main-con .side .recent-post .post-item .post-time{
        position: absolute;
        left: 100px;
        bottom: 5px;
        color: #999999;
    }
    .main-con .side .popular-tags{
        margin-top: 20px;
        width: 270px;
    }
    .main-con .blog-main{
        float: right;
        width:870px;
        height: 1830px;
        overflow: hidden;
    }
    .main-con .blog-main .latest-blog{
        position: relative;
        width: 870px;
        height: 780px;
        border-bottom: 1px solid #eaeaea;
    }
    .main-con .blog-main .latest-blog .blog-banner{
        position: relative;
        margin-top: 60px;
        width: 870px;
        height: 518px;
    }
    .main-con .blog-main .latest-blog .blog-banner .blog-detail{
        position: absolute;
        bottom: 0;
        text-indent: 2em;
        width: 870px;
        height: 38px;
        line-height: 38px;
        z-index: 8;
        color: #fff;
    }
    .main-con .blog-main .latest-blog .blog-article{
        margin-top: 24px;
        width: 870px;
        height: 166px;
    }
    .main-con .blog-main .latest-blog .blog-article .b-header>h4{
        width: 870px;
        font-size: 18px;
    }
    .main-con .blog-main .latest-blog .blog-article .b-sec{
        margin-top: 22px;
        font-size: 14px;
        line-height: 16px;
    }
    .main-con .blog-main .latest-blog .blog-article .b-foot{
        margin-top: 26px;
        font-size: 14px;
    }
    .main-con .blog-main .blog-card{
        position: relative;
        margin-top: 46px;
        width: 870px;
        height: 960px;
    }
    .main-con .blog-main .blog-card .blog-card-item{
        width: 270px;
        height: 410px;
        margin: 8px;
    }
    .main-con .blog-main .blog-card .blog-card-item h5{
        margin-top: 20px;
        width: 270px;
        font-size: 15px;
        line-height:20px;
    }
    .main-con .blog-main .blog-card .blog-card-item .b-c-i-d{
        margin-top: 20px;
        font-size: 14px;
        line-height: 20px;
        color: #999;
    }
    .main-con .blog-main .blog-card .blog-card-item .read-more{
        display: block;
        margin-top: 20px;
    }
    .main-con .blog-main .page{
        position:absolute;
        bottom: 20px;
        left: 50%;
        -webkit-transform: translateX(-20%);
        -moz-transform: translateX(-20%);
        -ms-transform: translateX(-20%);
        -o-transform: translateX(-20%);
        transform: translateX(-20%);
    }
</style>
