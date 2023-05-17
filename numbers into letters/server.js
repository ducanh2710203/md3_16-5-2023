let http = require('http');
let fs = require('fs');
let qs = require('qs')
const numWords = require("num-words");
// const numWords = require('num-words');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {

        let data = ''
        req.on('data', chunk => {
            data += chunk
        })

        req.on('end', () => {
            const userInfo = qs.parse(data);
            let str = numWords(userInfo.num)
            fs.readFile('./displayString.html', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                }
                data = data.replace("{ducanh}", str);
                //
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // console.log(data)
                res.write(data);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});
server.listen(4000, 'localhost', () => {
    console.log('http server http://localhost:4000')
})