<template>
  <div>
  <!-- 左侧导航渲染 -->
  <ul class="ul_list">
    <li :class="subIndex===index?'active':''" v-for="(item,index) in list" :key="index" @click="changeItem(item)">{{item.title}}</li>
  </ul>
  <!-- 右侧数据渲染 -->
  <div class="div_list">
    <div v-for="(item,index) in sub" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.price}}</p>
          <p>
            <span @click="dis(item)">-</span>
            {{item.count}}
            <span @click="add(item)">+</span>
            </p>
      </div>
  </div>
  
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    computed:{
      ...mapState(['list','sub','subIndex'])
    },
    methods:{
    ...mapMutations(['changeItem','dis','add']),
    ...mapActions(['initData']),
   
    },
    created(){
      this.initData()
    }
}
</script>
<style scoped>
.ul_list{
  width: 29%;
  float: left;
  display: inline-block; 
}
.ul_list li{
  list-style: none;
  height: 30px;
  line-height: 30px;
}
.div_list{
  width: 70%;
  display: inline-block; 
  }
  .active{
    background: orange
  }
</style>