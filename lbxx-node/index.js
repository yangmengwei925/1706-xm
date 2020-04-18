const http = require('http'); // 引入http模块
const url = require('url'); // 引入url模块
const fs = require('fs'); // 操作文件
const path = require('path');
// 创建一个server实例
const server = http.createServer((req, res) => {
    // 打印每次的请求地址和请求方法
    const receiveUrl = url.parse(req.url);
    const {pathname} = receiveUrl;
    const isEx = fs.existsSync(path.join(__dirname, pathname))
   
    if(isEx){
        const u = fs.readFileSync(path.join(__dirname, pathname));
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
        res.end(u)
    }else{
        res.end('404')
    }
   
})

// 监听3000的端口
server.listen(8080)