<template>
   <div class="ownswipers">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in pic" :key="index"> 
                  <img :src="require('../assets/'+item)" alt=""/>
              </div>
                
            </div>
        </div>
        <div class="div_btn" @click="$router.push('/login')">进入</div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  data(){
    return{
       pic:['3.jpg','4.jpg','5.jpg']
    }
  },
  mounted(){
    new Swiper('.swiper-container', {
          autoplay: true
      })
  }
}
</script>
<style scoped>
.swiper-container{
    width: 100%;
    height: 100%;
}
img{
    width: 100%;
    height: 100%;
}
 .div_btn{
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5%;
    background: rebeccapurple;
    color: #fff;
    position: fixed;
    top: 80%;
    bottom: 20%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999;

 }
</style>