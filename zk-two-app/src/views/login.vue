<template>
  <div class="login">
    <van-field v-model="username" required clearable label="用户名"  placeholder="请输入用户名"/>
    <van-field v-model="password" required clearable label="密码"    placeholder="请输入密码" />
    <van-button type="primary" size="large" @click="loginIn">登录</van-button>


    <img v-for="(item,index) in lisrpic" :src="require('../assets/'+item.pic)" :key="index"/>


  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      lisrpic:[
        {pic:'logo.png'},
        {pic:'logo.png'}
      ]
    }
  },
  methods:{
    loginIn(){
      const {username,password} = this
       this.$Mockurl('/login/data',{username,password}).then(
          data=>{
            if(data.code===0){
              localStorage.setItem('username',username)
               this.$router.push('/home')
            }else{
              alert(data.msg)
            }
          }
        )
    }
  }
}
</script>
<style scoped>
 .login{
   padding: 15px;
 }
</style>
