<template>
  <div>
     <div class="div_list">
      <div v-for="(item,index) in list" :key="index">
          <div v-for="(k,ind) in item.sub" :key="ind">
              <input  v-if="k.count>0" type="checkbox" :checked="k.check" @change="changeCheck(k)"/>
              <p v-if="k.count>0">{{k.name}}</p>
              <p v-if="k.count>0">{{k.price}}</p>
              <p v-if="k.count>0">
                <span @click="dis(k)">-</span>
                {{k.count}}
                <span @click="add(k)">+</span>
              </p>
          </div>
      </div>
      <p>总价:{{allprice}}</p>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(['list','allprice'])
  },
  methods:{
    ...mapMutations(['dis','add','changeCheck'])
  }
}
</script>