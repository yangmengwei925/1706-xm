import Mock from '@/mock'

export function Mockurl(url,obj={}){
    return new Promise(res=>res(Mock[url](obj)))
}