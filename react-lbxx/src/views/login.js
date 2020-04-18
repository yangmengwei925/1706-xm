import React ,{Component}from 'react'
import {Input,Button} from 'antd' 

class Login extends Component{
    state={
        username:'',
        password:'',
        checked:[true,false]
    }
    loginIn=()=>{
        const {username,password} = this.state

        this.mock_url('/zhiyuan/login',{username,password}).then(data=>{
            if(Object.is(data.code,0)){
                
                localStorage.setItem('username',username)
                localStorage.setItem('rolename',data.data)
                this.props.history.push('/home')
                return 
            }
            alert(data.msg)
        })
    }
    render(){
        const {username,password,checked} = this.state
        return <div>
                <Input value={username} type="text" onChange={(ev)=>this.setState({username:ev.target.value})}/>
                <Input value={password} type="password" onChange={(ev)=>this.setState({password:ev.target.value})}/>
                <Button onClick={()=>this.loginIn()}>登录</Button>

                


           
            </div>
    }
}

export default Login