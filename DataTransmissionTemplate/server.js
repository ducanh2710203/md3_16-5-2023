const http = require('http')
const fs = require('fs')
const qs = require('qs')
const server = http.createServer((req, res)=>{
    fs.readFile('./index.html','utf-8', (err, data)=>{
        if (err){
            console.log(err)
        }
        let userInfo = 'đức anh'
        data = data.replace('{name}',userInfo)
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})
server.listen(3030,"localhost",()=>{
    console.log("Server running in http://localhost:3030")
})