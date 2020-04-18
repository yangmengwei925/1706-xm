<template>
  <div>
    <p @click="$router.back()">返回</p>
    <div v-for="(item,index) in erjiList" :key="index">
       <img width="100" :src="require('../assets/erlist/'+item.pic)"/>
        <p>{{item.createtime}}</p>
        <p>{{item.storyname}}</p>
        <span :class="item.count?'red':null" @click="countData({storyname:item.storyname,rankname:$route.params.rankname})">收藏</span>  
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['erjiList'])
  },
  methods:{
    ...mapActions(['erjiIntiData','countData'])
  },
  created(){
    this.erjiIntiData({rankname:this.$route.params.rankname})
  }
}
</script>
<style scoped>
.red{
  color: red;
}
</style>