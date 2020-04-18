import logindata from './login.json'
import listData  from  './list.json'

function resultData(code,msg,data=[]){
    return {code,msg,data}
}
export default {

    //登录接口
    '/login/data'(obj){
       let result =  logindata.findIndex(item=>Object.is(item.email,obj.email)&&Object.is(item.password,obj.password)) 
       if(result!==-1) return resultData(0,'登录成功',logindata[result])
       return  resultData(1,'登录失败')
    },
    //注册接口
    '/re/data'(obj){
        let result = logindata.some(item=>item.email===obj.email)
        if(result) return resultData(1,'邮箱已存在，注册失败')
        logindata.push(obj)
        return resultData(0,'注册成功')
    },
    //一级列表接口
    '/list/list'(){
        return resultData(0,'成功',listData)
    },
    //二级列表接口
    '/list/list/data'(obj){
        let ind = listData.findIndex(item=>item.rankname === obj.rankname)
        return resultData(0,'成功',listData[ind].listdata)
    },
    //收藏
    '/list/count'(obj){
        let ind   = listData.findIndex(item=>item.rankname === obj.rankname)

        let index = listData[ind].listdata.findIndex(item=>item.storyname === obj.storyname)
        listData[ind].listdata[index].count = !listData[ind].listdata[index].count


        return resultData(0,'成功',listData[ind].listdata)
    }
    
}