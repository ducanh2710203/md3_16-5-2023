const http = require('http')
const fs = require("fs")
const server = http.createServer((req, res) => {
    fs.readFile('./index.html','utf-8',(err, data)=>{
        if (err){
            console.log(err)
        }
        res.writeHead(200, {"content-Type": "text/html"})
        res.write(data)
        return res.end()
    })
})
server.listen(3000, "localhost", () => {
    console.log("listen localhost:3000")
})