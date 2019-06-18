var http = require("http");


var server = http.createServer();

server.listen("3000", function (err) {
    if (!err) {
        console.log("server  3000 启动了");
    }


});
var fs = require("fs");
var tmp = require("art-template");





server.on("request", function (req, res) {

    console.log("请求进来了");



    fs.readFile("./tpl.html", function (err, data) {
        if (!err) {


            var  file=[];
            fs.readdir("./", function (err, fileData) {
                if (!err) {

               
                    file=fileData;
                    console.log(file);

                    console.log(data.toString());
                    var htmlStr = tmp.render(data.toString(), {
                        name: "zq",
                        age: 18,
                        hobbies: ['吃饭', '睡觉', '打豆豆'],
                        files:file
        
                    });
                   
                    res.end(htmlStr);
                }

            })
           
        }




    })
})