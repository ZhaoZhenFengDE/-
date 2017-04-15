<template>
<div class="blog">
    <main-nav></main-nav>
    <div class="g-bread">
        <div class="bread-crumb">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path:'blog' }">博客</el-breadcrumb-item>
                <el-breadcrumb-item><h4>Nullam ullamcorper nisl quis ornare molestie</h4></el-breadcrumb-item>
            </el-breadcrumb>
            <h2 class="b-dis">Nullam ullamcorper nisl quis ornare molestie</h2>
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
            <div class="blog-article">
                <div class="blog-banner">
                    <img src="../assets/img/blogbanner.jpg" alt="">
                    <div class="blog-detail"><span>作者：</span> admain <i class="el-icon-date"></i> 10 oct. 2016</div>
                </div>
                <section class="b-article">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur?
                        </p>
                </section>
                <footer class="tag">
                    <p><span>标签：</span>Flower leis, Granduation, Lei, Leis, Meagan bowman</p>
                </footer>
            </div>
        </div>
    </div>
    <footers></footers>
</div>
</template>

<script>
    import MainNav from './ChildComponents/TopNav'
    import Footers from './ChildComponents/Footers'
    export default{
        data(){
            return {
                msg: 'Hello Vue',
                search:'',
                time: new Date(),

            }
        },
        components:{
            MainNav,Footers
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
        margin: 0 auto 50px;
        overflow: hidden;
    }
    .main-con .side {
        position: relative;
        float: left;
        margin-top: 60px;
        width: 270px;
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
        overflow: hidden;
    }
    .main-con .blog-main .blog-article{
        position: relative;
        width: 870px;
    }
    .main-con .blog-main .blog-article .blog-banner{
        position: relative;
        margin-top: 60px;
        width: 870px;
        height: 518px;
    }
    .main-con .blog-main .blog-article .blog-banner .blog-detail{
        position: absolute;
        bottom: 0;
        text-indent: 2em;
        width: 870px;
        height: 38px;
        line-height: 38px;
        z-index: 8;
        color: #fff;
    }
    .main-con .blog-main .b-article{
        box-sizing: border-box;
        padding:50px 0;
        font-size: 14px;
        line-height: 20px;
    }
    .main-con .blog-main .b-article>p+p{
        margin-top: 20px;
    }
    .main-con .blog-main .tag{
        width: 870px;
        height: 60px;
        font-size: 14px;
        line-height: 60px;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }
    .main-con .blog-main .tag>p>span{
        font-size: 16px;
    }
</style>
