var http = require("http");
const server = http.createServer();
server.listen("30001", function () {


    console.log("3001启动了");
});
server.on("request", function (req, res) {


    //  console.log(req.url+"hh");
    //  res.setHeader("Content-Type","text/html;charset=utf-8")
    //  res.end(req.url+"<font  style='color:red'>你好</font>");


    var fs = require("fs");
    fs.readFile("./index.html", function (err, data) {


        if (!err) {
            res.end(data);
        }
      
    })
})

;`hh
  999999`.toString();




