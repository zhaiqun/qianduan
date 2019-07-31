const http = require('http');
const app = http.createServer();

const urlM = require('url')
app.listen(3001, function() {
    console.log('3001启动了')

})
app.on('request', function(req, res) {

    var { pathname: url, query } = urlM.parse(req.url, true)
    console.log(req.url)
    var data = { id: 0, age: 3, name: '小龙' }
    if (req.url.indexOf('/getscript') != -1) {
        res.end(`${query.callback}(${JSON.stringify(data)})`)

    } else {

        res.end('404')
    }

})