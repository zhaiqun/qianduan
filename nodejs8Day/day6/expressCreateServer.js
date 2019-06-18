const express = require('express');
const app = express();

const mysql = require('mysql');
app.set('view  engine', 'ejs');
app.set('views', 'ejsViews');

app.get('/', function (req, res) {
    res.render('showMsg.ejs', { name: 'zq', age: 19, arr: ['唱歌', '瑜伽'] });

})
// const  conn=mysql.createConnection({host:"localhost",user:"root",password:"root",database:"itcast"});
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'itcast'
})

app.get('/list', function (req, res) {
    const sql = "select  *  from  user";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('连接数据库失败');
        } else {
            res.render("userList.ejs", { data: result });
            console.log(result);
        }

    });
})
app.listen(3000, function () {

})