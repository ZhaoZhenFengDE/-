<template>
    <el-row>
        <el-col>
            <router-link v-bind:to="{ path:'/pud' }">
                <el-card class="card" :body-style="{padding:'0'}">
                    <img src="../../assets/img/1071019.jpg" class="image">
                    <h3>礼品网站</h3>
                    <span>￥300</span><i>￥500</i>
                    <div class="star">
                        <el-rate
                            v-model="value"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                </el-card>
            </router-link>
            <el-card class="card" :body-style="{padding:'0'}">
                <img src="../../assets/img/1071019.jpg" class="image">
                <h3>礼品网站</h3>
                <span>￥300</span><i>￥500</i>
                <div class="star">
                    <el-rate
                        v-model="value"
                        disabled
                        text-color="#ff9900">
                    </el-rate>
                </div>
            </el-card>
            <el-card class="card" :body-style="{padding:'0'}">
                <img src="../../assets/img/1071019.jpg" class="image">
                <h3>礼品网站</h3>
                <span>￥300</span><i>￥500</i>
                <div class="star">
                    <el-rate
                        v-model="value"
                        disabled
                        text-color="#ff9900">
                    </el-rate>
                </div>
            </el-card>
            <el-card class="card" :body-style="{padding:'0'}">
                <img src="../../assets/img/1071019.jpg" class="image">
                <h3>礼品网站</h3>
                <span>￥300</span><i>￥500</i>
                <div class="star">
                    <el-rate
                        v-model="value"
                        disabled
                        text-color="#ff9900">
                    </el-rate>
                </div>
            </el-card>
            <el-card class="card" :body-style="{padding:'0'}">
                <img src="../../assets/img/1071019.jpg" class="image">
                <h3>礼品网站</h3>
                <span>￥300</span><i>￥500</i>
                <div class="star">
                    <el-rate
                        v-model="value"
                        disabled
                        text-color="#ff9900">
                    </el-rate>
                </div>
            </el-card>
            <router-link v-bind:to="{ path:'/pud' }">
                <el-card class="card" :body-style="{padding:'0'}">
                    <img src="../../assets/img/1071019.jpg" class="image">
                    <h3>礼品网站</h3>
                    <span>￥300</span><i>￥500</i>
                    <div class="star">
                        <el-rate
                            v-model="value"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                </el-card>
            </router-link>
            <router-link v-bind:to="{ path:'/pud' }">
                <el-card class="card" :body-style="{padding:'0'}">
                    <img src="../../assets/img/1071019.jpg" class="image">
                    <h3>礼品网站</h3>
                    <span>￥300</span><i>￥500</i>
                    <div class="star">
                        <el-rate
                            v-model="value"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                </el-card>
            </router-link>
            <router-link v-bind:to="{ path:'/pud' }">
                <el-card class="card" :body-style="{padding:'0'}">
                    <img src="../../assets/img/1071019.jpg" class="image">
                    <h3>礼品网站</h3>
                    <span>￥300</span><i>￥500</i>
                    <div class="star">
                        <el-rate
                            v-model="value"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                </el-card>
            </router-link>
            <router-link v-bind:to="{ path:'/pud' }">
                <el-card class="card" :body-style="{padding:'0'}">
                    <img src="../../assets/img/1071019.jpg" class="image">
                    <h3>礼品网站</h3>
                    <span>￥300</span><i>￥500</i>
                    <div class="star">
                        <el-rate
                            v-model="value"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                value:4
            };
        }
    }
</script>


<style>
    .card{
        display: inline-block;
        width: 270px;
        height: 460px;
        text-align: center;
        margin: 8px;
    }
    img+h3{
        width: 270px;
        margin: 15px auto;
        font-size: 14px;
        font-weight: normal;
    }
    .star{
        margin:10px;
    }
</style>
