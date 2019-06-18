var express = require("express");
var app = express();

app.listen(3000, function () {

    console.log("express  3000启动了");

})

// app.use(express.static("./public/"));

app.use("/public/",express.static("./public/"));

app.engine('html',require('express-art-template'));

// app.engine('html', require('../'));
// app.set('views', __dirname + '/views');
// app.set('view options', {
//     debug: process.env.NODE_ENV !== 'production'
// });
app.get("/", function (req, res) {

    // res.setHeader("content-Type","text/plain;charSet=utf-8")

    res.render("index.html",{name:"zq",title:"首页66"})

})

app.get("/detail", function (req, res) {

    // res.setHeader("content-Type","text/html;charset=utf-8")

    res.render("detail.html",{hobbies:['吃饭','睡觉','打豆豆']})

})