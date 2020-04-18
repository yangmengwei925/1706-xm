<template>
  <div class="detail">
      <p>{{$route.params.title}}</p>
      <p>{{$route.params.count}}</p>
      <button @click="changeListCount({item:$route.params})">点赞</button>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default{
    methods:{
        ...mapMutations(['changeListCount'])

    }
}
</script>
