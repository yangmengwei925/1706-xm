import loginData from './login.json'
import ListData from './list.json'
//页面返回的数据封装
let resultData = function(code,msg,data=[]){
    return {
        code,msg,data
    }
}
//用户注册时 用户信息生成
let userData = function(username,password){
    return   {
       username,
       password,
       nickname:username,
       uid:'U'+new Date().getTime(),
       images:'logo.png',
       age:'',
       phone:'',
       sex:''
    }
}
//导出页面数据请求接口
export default {
    //登录接口
    '/login/login'(obj){
        let result     = loginData.some(item=>item.username===obj.username&&item.password===obj.password)
        let resultUser = loginData.some(item=>item.username===obj.username)
        //账户名 密码都存在 
        if(result) return resultData(200,'存在该账号')
        //账户名 不存在
        if(!resultUser) return resultData(201,'账号未注册')
        //账户名存在 密码错了
        return resultData(202,'密码不正确')  
    },
    //注册接口
    '/login/re'(obj){
        //判断用户名是否存在
        let result = loginData.some(item=>item.username===obj.username)
        if(result) return resultData(200,'存在该账号')
        //不存在 则注册为新用户
        let userobj = userData(obj.username,obj.password)
        loginData.push(userobj)
        return resultData(203,'注册成功,是否自动登录')
    },
    //获取数据
    '/userdata/get'(obj){
       let data = loginData.filter(item=>Object.is(item.username,obj.username)) 
       return resultData(200,'存在该账号',data)
    },
    //修改登录用信息
    '/userdata/set'(obj){
        let index = loginData.findIndex(item=>item.username===obj.username)
        loginData[index]= {...obj}
        return resultData(204,'修改成功')
    },
    //修改密码
    '/change/pwd'(obj){
        //先找到当前用户 比对输入的旧密码和存储的旧密码是否一致  如果一致就可以改密码 不一致就提示旧密码输入错误
        // let isChange = resultData(206,'旧密码输入错误') 
        // loginData.forEach(item => {
        //     if(item.username===obj.username&&item.password===obj.password)
        //     {
        //         item.password = obj.newpwd 
        //         isChange      = resultData(200,'修改成功')
        //     }
        // });
        // return isChange
        
        
        let result = loginData.some(item=>{
            if(item.username===obj.username&&item.password===obj.password){
                item.password = obj.newpwd  
                return true
            } 
            return false
        })

        if(!result) return resultData(206,'旧密码输入错误')
        return resultData(200,'修改成功')
        
    },
    //删除用户数据
    '/delete/user'(obj){
        let index = loginData.findIndex(item=>item.username===obj.username)
        loginData.splice(index,1)
        return resultData(200,'注销成功')
    },
    //全部状态数据
    '/list/data'(){
        return ListData
    }

}