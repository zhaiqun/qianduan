var express=require("express");

var path=require("path");

var app=express();

app.engine("html",require("express-art-template"));

app.set("views",path.join(__dirname,"/views"));
app.use("/public/",express.static("./public/"))

app.listen(5000,function(){


    console.log("middleware  5000  启动了");
})


app.use(function(req,res,next){

    res.render("404.html");

    next();

})

var  fs=require("fs");
app.get("/fs",function(req,res,next){

    fs.readFile("a.txt",function (err, data) {
        

        if (err) {
            next(err);
        }
    })

})


app.use(function(err,req,res,next){

    res.render("server500.html",{data:err.message});

})

