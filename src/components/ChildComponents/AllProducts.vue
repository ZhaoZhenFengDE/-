<template>
	<div class="main">
		<el-row>
			<el-col :span="8" v-for="(item,index) in products">
				<router-link :to="{name:'ProductDetail',params: { id: item.commodity_id }}">
					<el-card class="card" style="height:470px" :body-style="{padding:'0'}">
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
		<div class="page">
			<el-pagination
				layout="prev, pager, next"
				@current-change="getResults"
				:total= 'pageinfo.total'>
			</el-pagination>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
	 	data () {
        	return {
				products:null,
				pageinfo:{}
        	}	
        },
        created(){
			this.getResults();
		},
        methods:{
			getResults(pager){
				if(typeof pager === undefined){
					pager = 1;
				}
				this.$ajax.get('http://huali.com/api/allproducts?page=' + pager).then((response)=>{
					this.products = response.data.data;
					this.pageinfo = {
						total:response.data.total,
					}
				})
			}
		}
	}
</script>

<style type="text/css">
	
</style>