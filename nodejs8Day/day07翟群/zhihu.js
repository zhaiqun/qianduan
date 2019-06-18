

const express = require('express');

const app = express();
app.set('view  engine', 'ejs');

app.set('views', 'ejsViews');
app.use('/public', express.static('public'));

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'zhihu'

})

app.listen(3000, function () {

    console.log("server  running 3000");
})
const bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({ extended: false }));

const session = require('express-session');
app.use(
    session({
        secret: '这是加密的密钥',
        resave: false,
        saveUninitialized: false
    })
)
app.get("/", function (req, res) {
    res.render('register.ejs');

})


app.get("/login", function (req, res) {
    res.render('login.ejs');

})


app.get("/list", function (req, res) {
    res.render("list.ejs");


})
app.post("/checkEmail", function (req, res) {
    var sql = "select  count(*)  as countResult  from  userinfo  where email=?";
    conn.query(sql, req.body.email, function (err, strResult) {
        if (err) {
            res.send({ flag: -1, msg: "查询失败" });
            console.log({ flag: -1, msg: req.body.email + err.message });
        } else {

            if (strResult[0].countResult > 0) {
                res.send({ flag: 0, msg: '邮箱被占用了' });
                console.log({ flag: 0, msg: '邮箱被占用了' });
            } else {
                console.log({ flag: 1, msg: '木有问题' });
                res.send({ flag: 1, msg: '木有问题' });
            }
        }


    })

})

app.post('/login', function (req, res) {
    var pwd = req.body.pwd;
    var email = req.body.email;
    var sql1 = "select  *  from  userinfo  where email=? and pwd=?";
    conn.query(sql1, [email, pwd], function (err, strResult) {
        if (strResult.length == 0) {
            res.send({ flag: 0, msg: '用户名或者密码错误' });
        } else {
            req.session.username = strResult[0].name;
            res.send({ flag: 1, msg: '登录成功' });
        }

    })

})



app.get('/addArticle', function (req, res) {

    console.log(req.session.username);
    if (typeof req.session.username === 'undefined') {

        res.redirect('/login');

    } else {

        res.render('addArticle.ejs', { name: req.session.username });
    }


})



app.post('/addArticle', function (req, res) {


  
    var title = req.body.atitle;
    var content = req.body.acontent;
    var  name=req.session.username;
    console.log(name+title+content);
    var sql = "insert into articel   (title,content,author)  values (?,?,?)";

    conn.query(sql, [title, content, name], function (err, result) {
        if (err) {
            res.send({ flag: -1, msg: err.message });
        } else {
            res.send({ flag: 1, msg: "插入成功", id: result.insertId });

        }
    })
  



})

app.get('/ArticleDetail',function(req,res){

    var  id=parseInt( req.query.id) ;
    console.log(id);
    const sql = 'select * from articel where id=?';
    conn.query(sql,id,function(err,result){
        if (err) {
            console.log(err.message);
        }else{
            res.render('articleDetail.ejs', { title: result[0].title, content: result[0].content, author: result[0].author });

        }
      

    })
  

})



app.post("/logOut", function (req, res) {
    req.session.destroy(function () {
        res.send({ flag: 1 });
    })



})

app.post('/register', function (req, res) {

    var name = req.body.name;
    var pwd = req.body.pwd1;
    var email = req.body.email;
    if (req.body.pwd1 != req.body.pwd2) {
        res.send({ flag: -2, msg: '两次输入密码不一致' });
        return;
    }

    var sql1 = "select  count(*)  as countResult  from  userinfo  where email=?";
    conn.query(sql1, email, function (err, strResult) {
        if (err) {
            res.send({ flag: -1, msg: '数据库查询失败' });
        } else {
            if (strResult[0].countResult > 0) {
                res.send({ flag: 0, msg: '邮箱被占用了' });
            } else {

                var sql = "insert into userinfo (name,pwd,email)   values (?,?,?)";
                conn.query(sql, [name, pwd, email], function (e, result) {
                    if (e) {
                        res.send({ flag: -1, msg: '插入失败' + e.message });
                    } else {

                        res.send({ flag: 1, msg: '木有问题' });
                    }
                })
            }
        }
    })

})