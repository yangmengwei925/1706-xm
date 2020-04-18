import listData from './list.json'
import loginData from './login.json'

export default {
    //获取默认数据接口
    '/list/data'(){
        return Object.values(listData.comments).sort((a,b)=>{
            return new Date(b.createTime).getTime()- new Date(a.createTime).getTime()
        })
    },
    //发布状态接口
    '/add/list'(obj){
        //给对象添加属性
        listData.comments[obj.commentId] = obj
        return {code:0,msg:'添加成功',data:this[ '/list/data']()}
    },
    //登录接口
    '/login/data'(obj){
        if(loginData.some(item=>item.username === obj.username &&item.password === obj.password)) return {code:0,msg:'success'} 
        return {code:1,msg:'error'}     
    }
}