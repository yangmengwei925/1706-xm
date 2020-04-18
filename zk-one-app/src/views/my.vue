<template>
  <div>
  <div class="my" @touchstart="isShow=true" @touchend="end">
        <van-loading type="circular" color="#1989fa" v-show="isShow"/>
        <p v-for="item in data" :key="item.id">{{item.name}}</p>
    </div>
    <van-loading type="circular" color="#1989fa" v-show="isButtonShow"/>
    <button @touchstart="isButtonShow=true" @touchend="buttonEnd">加载更多</button>
  </div>
 
</template>
<script>
import {MockUrl} from '@/until'
export default{
    data(){
      return{
          data:[],
          isShow:false,
          isButtonShow:false
      }
    },
    mounted(){
       MockUrl('/list/top/data').then(data=>this.data = data)
    },
    methods:{ 
      end(){
        MockUrl('/list/top/data').then(data=>{
            this.isShow = false
            this.data = data
          }
        )
      },
      buttonEnd(){
        MockUrl('/list/botton/data').then(data=>{
            this.isButtonShow = false
            this.data = [...this.data,...data]
            
          }
        )
      }
    }
   
}
</script>
