<template>
  <div class="login">
    <div>用户邮箱<input type="text" v-model="email"/></div>
    <div>用户密码 <input type="text" v-model="password"/></div>
    <button @click="loginIn">登录</button>
    <p @click="$router.push('/re')">没有账号，去注册</p> 
  </div>
</template>
<script>
export default {
  data(){
    return{
        email:'',
        password:''
    } 
  },
  methods:{
    loginIn(){
        let {email,password} = this 
        if(email===''||password===''){
                alert('用户名或密码不能为空')
                return
        } 
        this.$Mockurl('/login/data',{email,password}).then(data=>{
          console.log(data)
            if(data.code===0){
                 localStorage.setItem('username',data.data.username)
                 localStorage.setItem('email',data.data.email)
                 localStorage.setItem('img',data.data.img)
                 this.$router.push('/home')
                 return
            }
            alert(data.msg)
        })
    }
  }
}
</script>
