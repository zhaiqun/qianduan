const express = require('express')
const app = express()

const router = require('./root.js')

app.use(router)

app.listen(3001, function() {

    console.log(`服务启动了`)
});