let http = require('http');
let fs = require('fs');
let qs = require('qs')

let server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            let userInfo = qs.parse(data)
            data = data.replace("{img}",userInfo.img)
            return res.end();
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at http://localhost:8080/')
});
