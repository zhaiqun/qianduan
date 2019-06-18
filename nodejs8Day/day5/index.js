const express = require('express');
const mysql = require('mysql');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'ejsViews');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'itcast'


});


const  bodyParse=require('body-parser');

app.use(bodyParse.urlencoded({extended:false}));
app.use('/public', express.static('public'));

app.get('/', function (req, res) {

    res.render('userList.ejs');

});
app.post('/userList', function (req, res) {

    const sql = "select * from user";

    conn.query(sql, function (err, result) {
        if (err) {

            res.send({ msg: err.message, flag: 'no' });
        } else {
            console.log(result);
            res.send({ msg: result, flag: 'yes' })
        }
    })
})

app.get('/test', function (req, res) {
    console.log(11);
    var dataStr={code:0,msg:"",count:1,data:[{id:10000,name:"user-0",password:"zxb"}]};
    res.render('test.ejs',dataStr);

});
app.post('/test', function (req, res) {

    console.log(1);

    res.send('test.ejs',{msg:"",code:0,data:[{id:3,username:"zq"}]});

});

app.post('/delUser', function(req, res) {
    console.log(req);
    console.log(req.body);
    const userId = req.body.id;
    console.log(userId);
    const sql = 'delete from user where id=?'; 
    conn.query(sql, userId, function(err, result) {
        if (err) {
            res.send({ msg: '删除失败', flag : 'no' });
        } else {
            res.send({ msg: '删除成功', flag: 'yes' });
        }
    })

});



// app.post('/userList',function(req,res){
//     const sql = "select  *  from  user";
//     conn.query(sql, function (err, result) {
//         if (err) {
//           res.send({msg:err.message,flag:"no"});
//         } else {
//            res.send({msg:result,flag:"yes"});
//         }

//       });
// })


app.listen(3000, function () {

    console.log('server running');


});