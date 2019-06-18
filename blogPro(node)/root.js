var express = require("express");
var  session=require("express-session");

var  md5 = require('js-md5');
var router = express.Router();

router.get("/test", function (req, res) {
    res.render("test.html", { date: 111 });
})
router.get("/", function (req, res) {
    console.log(req.session.user);

    res.render("index.html",{user:req.session.user});
})

router.get("/login", function (req, res) {



    res.render("login.html");
})


var user = require("./models/user.js");
router.post("/login", function (req, res) {

    console.log(req.body);
    user.findOne({ email: req.body.email, pwd:md5(md5(req.body.pwd))  }, function (err, data) {
        if (err) {
            next();
        }
        console.log(data);
        if (data) {
            req.session.user=data;
            return res.status(200).json({
                code: 1,
                msg: '登录成功'
            })
        }
        return res.status(200).json({
            code: 0,
            msg: '用户名或者密码错误'
        })
    })

})


router.get('/register',function(req,res){

    res.render('register.html');
})



router.post('/register',function(req,res){

    var  reqBody=req.body;

    console.log(reqBody);
    user.findOne({email:reqBody.email},function(err,  data){
        if (err) {
            next();
        }
        if (data) {
          return  res.json({code:0,msg:"邮箱已被注册"});
        }

        new user({email:reqBody.email,pwd: md5(md5()) ,name:reqBody.nikeName}).save(function(err,user){
            if (err) {
                next();
            }
            return  res.json({code:1,msg:"注册成功"});
        })

    })

})

router.get("/logout",function(req,res){
    req.session.user=null;

    res.render("login.html");
})


router.use(function(err,req,res,next){
    console.log(err.message);
    return res.status(500).json({
        code: -1,
        msg: "服务其出错了",
    

    })
})
module.exports = router;