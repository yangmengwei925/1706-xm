<template>
  <div class="home">
    <div>
      <button @click="isShow=true">我的</button>
       新闻列表
       </div>
        <!-- 显示隐藏 -->
        <div class="own" v-show="isShow">
          <button @click="isShow=false">返回</button>
        </div>
        <!-- 列表 -->
        <div v-for="(item,index) in list" :key="index" @click="$router.push({name:'erlist',params:{rankname:item.rankname}})">
              <p>{{item.rankname}}</p>
              <img width="200" :src="require('../assets/list/'+item.rankimg)" />
        </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{
      isShow:false
    }
  },
  computed:{
    ...mapState(['list'])
  },
  methods:{
    ...mapActions(['initData'])
  },
  created(){
    this.initData()
  }
}
</script>
<style scoped>
.own{
  width: 100vw;
  position: fixed;
  top:0;
  left: 0;
  height: 100vh;
  color: #fff;
  background: green
}
</style>
