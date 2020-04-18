<template>
  <div>
        <img :src="require('../assets/6.jpg')" alt=""/>
        <div class="div_button" @click="$router.push('/ownswipers')">进入</div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

/* 启动页 */
img{
    width: 100vw;
    height: 100vh;
}
.div_button{
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