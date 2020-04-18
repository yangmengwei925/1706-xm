<template>
    <div>
        <!-- 头 -->
       <van-sticky>
            <van-search v-model="value" placeholder="请输入搜索关键词" @search="getdata({type:'search',value:value})"/>
            <van-grid>
                <van-grid-item text="默认"        @click="getdata()"/>
                <van-grid-item text="价格升序"     @click="getdata({type:'price'})"/>
                <van-grid-item text="最新时间"     @click="getdata({type:'time'})"/>
                <van-grid-item text="最低销量"     @click="getdata({type:'sale'})"/>
            </van-grid>
        </van-sticky>
        <!-- 身体 -->
        <div>
            <van-card v-for="item in list" :key="item.id" :price="item.price" :desc="item.desci" :title="item.title" :thumb="item.thumb">
                <div slot="tags">
                    <van-tag plain type="danger">{{item.type}}</van-tag>
                    <van-tag plain type="danger">{{item.time}}</van-tag>
                    <van-tag plain type="danger">{{item.sale}}</van-tag>
                </div>
                <div class="my-footer" slot="footer">
                    <van-stepper min="0" v-model="item.count" @change="stepChange(item)"/>
                    <van-button type="primary" size="mini" @click="$router.push({name:'detail',params:item})">详情</van-button>
                    <van-button type="warning" size="mini">加入购物车</van-button>    
                </div>
            </van-card>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {      
            value:''
        }
    },
    updated(){
        console.log(this.list)
    },
    computed:{
            ...mapState(['list'])
    },
    methods:{
        ...mapActions(['getdata','stepChange']),
         
    },
    mounted(){
        this.getdata()
    }
}
</script>
<style scoped>
.van-stepper{
    display: inline-block;
}
.van-button--mini{
    float: right;
    height: 28px;
}
.my-footer{
    width: 100%;
    height: 28px;
}
</style>