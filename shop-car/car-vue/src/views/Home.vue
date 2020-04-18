<template>
  <div>
    <router-view/>
    <div class="nav_bottom">
      <span :class="defaultIndex===index?'active':''" v-for="(item,index) in nav" :key="index" @click="changeUrl(index,item.to)">{{item.title}}</span>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
      ...mapState(['nav','defaultIndex'])
    },
    methods:{
      ...mapMutations(['changedefaultIndex']),
      changeUrl(index,to){
        this.changedefaultIndex({defaultIndex:index})
        this.$router.push(to)
      }
    }
}
</script>
<style scoped>
  .nav_bottom{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position:fixed;
    bottom:0;
  }
  .nav_bottom span{
    width: 25%;
    float: left;
    text-decoration: none
  }
  .active{
    color:red;
  }
</style>
