var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var rooter = require("./root.js");
app.engine('html', require('express-art-template'));
app.use("/public/", express.static(path.join(__dirname, "../front/public/")));
app.set('views', '../front');
app.use(rooter)
app.listen(3001);

console.log('服务启动')