var express = require("express");
var router = express.Router();


router.get('/index', function(req, res) {
    console.log('进球进来了')
    res.send('Hello World')
})

router.use(function(err, req, res, next) {
    console.log(err);
    return res.status(500).json({
        code: -1,
        msg: "服务其出错了",


    })
})

module.exports = router;