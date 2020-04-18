import listData from './list.json'
export default {
   '/list/data'(actions){
         //默认数据
         if(actions.type===undefined) return listData

          //搜索
          if(actions.type==='search'){
            return listData.filter(item=>item.title.includes(actions.value))
         }
         //筛选
         return listData.sort((a,b)=>{
            if(actions.type==='sale')  return a[actions.type]-b[actions.type]
            if(actions.type==='price') return b[actions.type]-a[actions.type]
            if(actions.type === 'time') return new Date(b.time).getTime()-new Date(a.time).getTime()
         })  
   },
   '/list/change/count'(obj){
      listData[obj.id].count = obj.count
      return {code:0,msg:"修改成功",data:listData}
   }
}