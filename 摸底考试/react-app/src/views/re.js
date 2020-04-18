import React, { Component } from 'react'

class Re extends Component {
    state={
        username:'',
        email:'',
        password:'',
        img:require('../assets/load.png')
    }
    reIn = () => {
       
        this.$Mockurl('/re/data',this.state).then(data=>{
            if(data.code===0){
                alert(data.msg)
                this.props.history.push('/login')
                return 
            }
            alert(data.msg)
        })
    }
    //验证非空
    isEmpty = value =>{
       
    }
    render() {
        let {username,email,password,img} = this.state
        return (
            <div className="re">
                <div className="re_file">
                    <input type="file" onChange={ev=>this.$FileunSync(ev.target.files[0],result=>this.setState({img:result}))}/>
                    <img src={img} />
                </div>
                <div>
                    <span ref="username">用户名称</span>
                    <input type="text"  value={username}  onChange={(ev)=>this.setState({username:ev.target.value})}/>
                </div>
                <div>
                    <span ref="email">用户邮箱</span>
                    <input type="text"  value={email}     onChange={(ev)=>this.setState({email:ev.target.value})}/>
                </div>
                <div>
                    <span ref="password">用户密码</span>
                    <input type="text"  value={password}  onChange={(ev)=>this.setState({password:ev.target.value})}/>
                </div>
                <button onClick={()=>this.reIn()}>注册</button>
                <p onClick={()=>this.props.history.push('/login')}>已有账号，去登录</p>
            </div>
        )
    }
}
export default Re