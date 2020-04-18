import Mock from 'mockjs'

Mock.mock('/login/login','post',(req)=>{
    //接收的参数
    console.log(req.body)

    //返回参数 前端页面会打印到res
    return Mock.mock({
        "user|5-10":[
            {
                "name":'@cname',
                "id|+1":0,
                "text":"@cparagraph",
                "time":"@datetime()"
            }
        ]
    })
})



