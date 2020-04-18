import React ,{Component}from 'react'
import Mock from '../mock'

//登录拦截
export function LoginIn(Com){
    return class LoginGroup extends Component{
        componentWillMount(){
            if(localStorage.getItem('username')===null||localStorage.getItem('rolename')===null){
                this.props.history.push('/login')
                return
            }
        }
        render(){
            return <div>
                <Com {...this.props}/>
            </div>
        }
        
    }
}

//模拟数据请求
export function Mockurl(url,obj={}){
    return new Promise(res=>{
        setTimeout(()=>res(Mock[url](obj)),Math.random()*1000)
    })
}
