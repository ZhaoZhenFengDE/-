<template>
    <div class="checkout">
        <div class="g-bread">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>结算商品</el-breadcrumb-item>
                </el-breadcrumb>
                <h2 class="b-dis">结算商品</h2>
            </div>
        </div>
        <div class="main-content">
            <div class="all-com">
                <h4>已有账号? <a href="">点击登录</a></h4>
                <el-collapse class="coll" v-model="activeName" accordion>
                    <el-collapse-item title="地址 ADDRESS" name="1">
                        <el-cascader
                            :options="options"
                            :props="props"
                        ></el-cascader>
                        <div class="add-input">
                            <el-input v-model="input" placeholder="请输入详细的收货地址"></el-input>
                        </div>
                        <el-button class="add-btn" type="primary">确认收货地址</el-button>
                    </el-collapse-item>
                    <el-collapse-item title="运送 SHIPPING" name="2">
                        <el-radio-group v-model="radio">
                            <el-radio-button label="顺丰"></el-radio-button>
                            <el-radio-button label="圆通"></el-radio-button>
                            <el-radio-button label="中通"></el-radio-button>
                            <el-radio-button label="韵达"></el-radio-button>
                        </el-radio-group>
                    </el-collapse-item>
                    <el-collapse-item title="付款 PAYMENT" name="3">
                        <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="产品"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="描述"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="价格">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="数量">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="总价">
                            </el-table-column>
                        </el-table>
                    </el-collapse-item>
                    <el-collapse-item title="总价 CART TOTALS" name="4">
                        <el-table
                            :data="total"
                            stripe
                            style="width: 100%">
                            <el-table-column
                                prop="price"
                                label="商品总价">
                            </el-table-column>
                            <el-table-column
                                prop="post"
                                label="邮费">
                            </el-table-column>
                            <el-table-column
                                prop="totalpay"
                                label="总价">
                            </el-table-column>
                        </el-table>
                        <el-button class="pay-btn" type="primary">确认付款</el-button>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="total">
                <dl class="total-price">
                    <dt class="cart-total">购物车总价</dt>
                    <dd class="cart-subtotal">商品总价：<span>￥100</span></dd>
                    <dd class="shipping">运费：<span>￥8</span></dd>
                    <dd class="order-total">订单总价：<span>￥108</span></dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                activeName: 1,
                options: [],
                props: {
                    value: 'value',
                    children: 'cities'
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                total:[
                    {
                    	price:100,
                    	post: 8,
                    	totalpay:108
                    }
                ]
            }
        },
        methods: {
        },
        created(){
            this.$http.get('http://huali.com/api/province').then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.options[i] = {};
                    this.options[i].value = response.data[i].value;
                    this.options[i].label = response.data[i].province;
                    this.options[i].cities = [];
                    this.$http.get('http://huali.com/api/cities/' + response.data[i].value).then((response) => {
                        for (let a = 0; a < response.data.length; a++) {
                            this.options[i].cities[a] = {};
                            this.options[i].cities[a].value = response.data[a].value;
                            this.options[i].cities[a].label = response.data[a].cities ? response.data[a].cities : response.data[a].areas;
                        }
                        return;
                    });
                }
                return;
            });
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

    .main-content {
        position: relative;
        width: 1170px;
        height: 600px;
        overflow: hidden;
        margin: 50px auto;
    }

    .all-com {
        float: left;
        width: 870px;
    }

    .all-com > h4 {
        height: 50px;
        font-size: 14px;
        font-weight: normal;
        text-indent: 2em;
    }

    .coll {
        border-left: none;
        border-right: none;
    }

    .total {
        float: right;
        width: 270px;
    }
    .total .total-price{
        width: 270px;
        height: 180px;
    }
    .total .total-price .cart-total{
        font-size: 14px;
        line-height: 30px;
        border-bottom: 1px solid #eaeaea;
    }
    .total .total-price>dd{
        position: relative;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border-bottom: 1px solid #eaeaea;
    }
    .total .total-price>dd>span{
        position:absolute;
        display: inline-block;
        height: 40px;
        width: 50px;
        right: 0;
        text-align: center;
    }
    .total .total-price .order-total{
        border-bottom: none;
    }
    .add-input{
        float: right;
        width: 600px;
    }
    .add-btn{
        float: right;
        margin: 15px 0;
    }
    .pay-btn{
        float: right;
        margin: 15px 0;
    }
</style>
