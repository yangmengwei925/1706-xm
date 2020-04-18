import zhiyuanList from './zhiyuan.json'
import userData   from './user.json'
import roleData   from './role.json'
export default {

    //职员登录接口
    '/zhiyuan/login'(obj){
        let result = zhiyuanList.findIndex(item=>item.username === obj.username && item.password === obj.password)
        if (result!==-1) return {code:0,msg:'登录成功',data:zhiyuanList[result].rolename}
        return {code:1,msg:'用户名或密码错误'}
    },
    //职员列表
    '/office/list'(){
        return zhiyuanList
    },
    //添加职员
    '/add/office/list'(obj){
        if(zhiyuanList.some(item=>item.username===obj.username)) return {code:1,msg:'已有账号'}
        zhiyuanList.push(obj)
        return {code:0,msg:'添加成功',data:zhiyuanList}
    },
    //修改职员
    '/office/change/list'(obj){
        let result = zhiyuanList.findIndex(item=>item.username===obj.username)
        zhiyuanList.splice(result,1,obj)
        return zhiyuanList
    },
    //搜索职员
    '/search/list'(obj){
        return zhiyuanList.filter(item=>item.username.indexOf(obj.val)!==-1)
    },
    //现有的角色列表
    '/role/data'(obj){
        console.log(obj)
        if(obj.rolename === undefined) return roleData
        return roleData.filter(item=>item.rolename===obj.rolename)[0]
    },

    //获取用户数据接口
    '/user/data'(){
        return userData
    },
    //删除修改用户数据
    '/changeDelete/list'(obj){
        
        let findex = userData.findIndex(item=>item.user === obj.item.user)
        if(findex!==-1){
            if(obj.type === 'defaultDeleteValue')
            {
                userData.splice(findex,1)
                return {code:0,msg:'删除成功',data:userData}

            } 
            if(obj.type === 'defaultChangeValue') 
            {
                userData.splice(findex,1,obj.item)
                return {code:0,msg:'修改成功',data:userData}
            }
        }
        
    }


}