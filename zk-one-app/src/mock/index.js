import listData from './list.json'

let beginNum = 0 
 
export default{

    //初始化的时候
   
    '/list/top/data'(){
        beginNum = 3
        return listData.slice(0,3)
    },

    //上拉加载
    '/list/botton/data'(){
        let endNum = beginNum+3<listData.length?beginNum+3:listData.length+1

        let arr    = listData.slice(beginNum,endNum)

        beginNum   = beginNum+3
        return arr
    }
}