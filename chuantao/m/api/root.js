var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')

var product = require('./models/product')
router.get('/', function(req, res) {

    res.render('index.html')
})
router.get('/search', function(req, res) {

    res.render('search.html')
})

router.get('/searchList', function(req, res) {

    res.render('searchList.html')
})

router.post('/searchList', function(req, res) {

    res.render('searchList.html')
})
module.exports = router;