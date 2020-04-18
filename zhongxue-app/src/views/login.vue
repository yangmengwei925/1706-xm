<template>
  <div class="login">
      <van-field required clearable label="用户名" v-model="username" placeholder="请输入用户名" />
      <van-field required clearable label="密码"  v-model="password"  placeholder="请输入密码" />
      <van-button type="info" size="large" @click="loginIn('/login/login')" v-show="isShow">登录</van-button>
      <van-button type="info" size="large" @click="loginIn('/login/re')" v-show="!isShow">注册</van-button>
      <p @click="reIn" v-show="isShow">没有账号，去注册</p>
  </div>
</template>
<script>

import {mapMutations} from 'vuex'

export default {
  data(){
    return{
        username:'',
        password:'',
        isShow:true
    }
  },
  methods:{
    ...mapMutations(['changeUser']),
    //登录注册方法
    loginIn(pathUrl){
      //向后端发送的登录账号及密码
      let {username,password} = this
      //模拟数据请求
      this.$Mockurl(pathUrl,{username,password}).then(
         data=>{
            if(data.code === 200){
              this.changeUser({username:username})
              this.$router.push('/home')
              return 
            }
            if(data.code === 203){
              this.changeUser({username})
              window.confirm(data.msg)? this.$router.push('/home'): this.isShow = true;
              return 
            }
            alert(data.msg) 
         }
       )
    
    },
    //点击没有账号去注册
    reIn(){
        this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped>
.login{
  padding: 15px;
}
</style>