<template>
  <div class="login">
      <button @click="loginIn">登录</button>
  </div>
</template>
<script>
export default {
    methods:{
        loginIn(){
            localStorage.setItem('username','123')
            this.$router.push('/home')
        }
    }
}
</script>
