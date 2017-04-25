<template>
    <div class="article">
        <main-nav></main-nav>
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
            <div class="blog-main clearfix">
            <div class="blog-article">
                <div class="blog-banner">
                    <img :src= article.blog_thumb alt="">
                    <div class="blog-detail"><span>作者：{{ article.blog_editor }}</span>
                        <i class="el-icon-date"></i> {{article.created_at}}
                    </div>
                </div>
                <section class="b-article" v-html = article.blog_content>

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
    import MainNav from './ChildComponents/MainNav'
    import Footers from './ChildComponents/Footers'
    export default{
    	name:'Article',
        components:{
            MainNav,Footers
        },
        data(){
            return {
                article:null,
                search:'',
            }
        },
        created(){
        	this.$ajax.get('http://huali.com/api/article/'+ this.$route.params.id).then((response)=>{
        		this.article = response.data;
            })
        }
    }
</script>

<style>

</style>
