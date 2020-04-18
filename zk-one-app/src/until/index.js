import Mock from '@/mock'
export function MockUrl(url,obj={}){
    return new Promise(res=>res(Mock[url](obj)))
}