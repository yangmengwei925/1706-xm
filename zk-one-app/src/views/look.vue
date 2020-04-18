<template>
  <div class="look">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="$router.push({name:'detail',params:item})">
          <p>{{item.title}}</p>
          <p>{{item.count}}</p>
        </li>
      </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
      return {
        
      }
    },
    computed:{
        ...mapState(['list'])
    },
    

}
</script>
<style scoped>
  img{
    width: 100px;

  }
</style>
