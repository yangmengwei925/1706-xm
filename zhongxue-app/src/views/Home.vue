<template>
  <div class="home">
    <div class="content">
        <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,key) in titleNav" :key="key" :icon="item.icon"><router-link :to="item.to" >{{item.text}}</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
       active: 0,
      titleNav:[
        {
          text:'圈子',
          to:'/home/cri',
          icon:'home-o'
        },
         {
          text:'我的',
          to:'/home/my',
          icon:'friends-o'
        }
      ]
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: black
}
.van-tabbar-item--active a{
  color: #1989fa
}
.footer{
    position: fixed;
    bottom: 0;
    height: 50px;
}
</style>
