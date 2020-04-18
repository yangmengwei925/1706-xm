<template>
  <div class="re">
      <div class="re_file">
          <input type="file" @change="$FileunSync(ev.target.files[0],result => this.img = result)"/>
          <img :src="img" />
      </div>
      <div>
          <span ref="username">用户名称</span>
          <input type="text"  v-model="username"/>
      </div>
      <div>
          <span ref="email">用户邮箱</span>
          <input type="text"  v-model="email"/>
      </div>
      <div>
          <span ref="password">用户密码</span>
          <input type="text"  v-model="password"/>
      </div>
      <button @click="reIn">注册</button>
      <p @click="$router.push('/login')">已有账号，去登录</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
        username:'',
        email:'',
        password:'',
        img:require('../assets/load.png')
    }
  },
  methods:{
    reIn(){
        const {username,email,password,img} = this
        this.$Mockurl('/re/data',{username,email,password,img}).then(data=>{
            if(data.code===0){
                alert(data.msg)
                this.$router.push('/login')
                return 
            }
            alert(data.msg)
        })
    }
    
  }
}
</script>
<style scoped>
.re .re_file{
    width: 100%;
    height: 100px;
    background: gray;
    text-align: center;
    position: relative;
}
.re .re_file  img{
    width: 100px;
    height: 100px;
    display: inline-block;
}
.re .re_file input{
    width: 100px;
    height: 100px;
    opacity: 0;
    position: absolute;
    top:0;
    bottom:0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>