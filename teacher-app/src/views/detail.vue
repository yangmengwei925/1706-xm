<template>
    <div>
        <!-- 基础信息 -->
        <p v-for="item in detailData" :key="item">{{$route.params[item]}}</p>
        <!-- 图片 -->
         <van-image round width="100px" height="100px" :src="$route.params.thumb" />
        <!-- 加加减减 -->
        <van-stepper min="0"  v-model="$route.params.count"/>
        <!-- 尺寸 -->
        <div><van-button :type="defaultIndex===index?'primary':'warning'" size="mini" v-for="(k,index) in $route.params.size" :key="index" @click="defaultIndex=index">{{k}}</van-button></div>
        <!-- 底部按钮 -->
       <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
         <van-goods-action-button type="danger" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
       </van-goods-action>
    </div>
</template>
<script>
export default {
    data(){
        return {
            defaultIndex:0,
            detailData:Object.keys(this.$route.params).filter(item=>item!=='thumb'&&item!=='size'&&item!=='id'&&item!=='count')
        }
    }
}
</script>