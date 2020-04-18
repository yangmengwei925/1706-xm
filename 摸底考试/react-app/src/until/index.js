import Mock from '../mock'
import React,{Component} from 'react'

//模拟异步请求
export function Mockurl(url,obj={}){
    return new Promise(res=> res(Mock[url](obj)))
}
//文件上传
export function FileunSync(file,callback){
       //创建实例
       let reader    = new FileReader()
       //读取本地图片的地址
       reader.readAsDataURL(file)
       //读取完成回调
       reader.onload = ev => callback(ev.target.result)
}

//登录拦截高阶组件
export function LoginLanJie(Com){
    return class LanJie extends Component{
        componentWillMount(){
            if(localStorage.getItem('username')===null){
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
