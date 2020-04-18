import React, { Component } from 'react'
class Login extends Component {
    state={
        email:'',
        password:''
    }
    LoginIn=()=>{
        //获取到登录表的数据 （给到接口对应的邮箱和密码）
        let {email,password} = this.state 
        if(email===''||password===''){
                alert('用户名或密码不能为空')
                return
        } 
        this.$Mockurl('/login/data',{email,password}).then(data=>{
            if(data.code===0){
                 localStorage.setItem('username',data.data.username)
                 localStorage.setItem('email',data.data.email)
                 localStorage.setItem('img',data.data.img)
                 this.props.history.push('/home')
                 return
            }
            alert(data.msg)
        })

    }
    render() {
        let {email,password} = this.state
        return (
            <div className="login">
               <div>用户邮箱<input type="text"  value={email}  onChange={(ev)=>this.setState({email:ev.target.value})}/></div>
               <div>用户密码 <input type="text" value={password}  onChange={(ev)=>this.setState({password:ev.target.value})}/></div>
               <button onClick={()=>this.LoginIn()}>登录</button>
               <p onClick={()=>this.props.history.push('/re')}>没有账号，去注册</p>
            </div>
        )
    }
}

export default Login
