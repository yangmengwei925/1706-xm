import Mock from '@/mock'

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

