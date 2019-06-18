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

app.post('/delUser', function(req, res) {

    console.log(req.body);
    const userId = req.body.id;
    console.log(userId);
    const sql = 'delete from user where id=?'; 
    conn.query(sql, userId, function(err, result) {
        if (err) {
            res.send({ msg: '删除失败', flag: 'no' });
        } else {
            res.send({ msg: '删除成功', flag: 'yes' });
        }
    })

});
app.post('/delUser', function (req, res) {

    const userId = req.body.id;
    console.log(userId);
    const sql = 'delete from user where id=?';
    conn.query(sql, userId, function (err, result) {
        if (err) {
            res.send({ msg: '删除失败', flag: 'no' });
        } else {
            res.send({ msg: '删除成功', flag: 'yes' });
        }
    })

})


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