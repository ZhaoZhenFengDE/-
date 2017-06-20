<template>
    <div class="main">
        <el-row>
            <el-col :span="8" v-for="(item,index) in products">
                <router-link :to="{name:'ProductDetail',params: { id: item.commodity_id }}">
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
    </div>
</template>

<script type="text/javascript">
    export default{
        created () {
            this.fetchData();
        },
        data () {
            return {
                products:null,
                total:null
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                if(this.$route.params.id !== undefined){
                    this.$ajax.get('http://huali.com/api/category/'+ this.$route.params.id).then((response)=>{
                        this.products = response.data;
                    });
                }else{
                    this.$ajax.get('http://huali.com/api/products/'+ this.$route.params.price[0]+'&&'+ this.$route.params.price[0]).then((response)=>{
                        this.products = response.data;
                    });
                }
            }
        },
    }
</script>

<style type="text/css">
    
</style>