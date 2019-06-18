var express = require("express");
var app = express();

var path = require("path");

var bodyParser = require("body-parser");

app.engine("html", require("express-art-template"));
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")));
app.set("/views/", path.join(__dirname, "./views/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



var path = require("path");
var rooter = require("./root.js");
var sess = {
    secret: 'keyboard cat',
    cookie: {}
}

// if (app.get('env') === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
// }
var session = require('express-session')
app.use(session(sess))


app.use(rooter);


// var  fs=require('fs');

// fs.readFile('https://space.bilibili.com/44272436/channel/detail?cid=57180',function(err,data){

//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile('./1.txt',data);

// })
app.listen(5000, function () {

    console.log(path.join(__dirname, "./views/test"));
    console.log("blog服务启动了")
})
