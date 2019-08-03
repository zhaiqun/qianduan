const fs = require('fs')

function fromJsonFile(fileName) {
    return (req, res) => {

        const data = fs.readFileSync(`mocker/data/${fileName}.json`).toString()
        const json = JSON.parse(data)
        return res.json(json)
    }

}

function fromJosnDetailFile(fileName) {
    return (req, res) => {
        const data = fs.readFileSync(`mocker/data/${fileName}.json`).toString()
        const jsonData = JSON.parse(data)
        var result = {}

        console.dir('参数' + req.params)
        console.dir('参数' + req.params.id)
        for (var i = 0; i < jsonData.message.length; i++) {
            // params固定写法，表示存储的参数，它里面存储了一个id参数
            if (jsonData.message[i].id === Number(req.params.id)) {
                result = { "status": 0, "message": [jsonData.message[i]] }

                break;
            }
        }

        console.log(result)
        return res.json(result)

    }
}

const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    _proxy: {
        proxy: {
            '/repos/(.*)': 'https://api.github.com/',
            '/:owner/:repo/raw/:ref/(.*)': 'http://127.0.0.1:2018'
        },
        changeHost: true,
        // modify the http-proxy options
        httpProxy: {
            options: {
                ignorePath: true,
            },
            listeners: {
                proxyReq: function(proxyReq, req, res, options) {
                    console.log('proxyReq');
                },
            },
        },
    },
    'GET /api/getSwape': fromJsonFile('banner'),
    'GET /api/getProductList': fromJsonFile('GoodProductList'),
    'GET /api/getProductDetail/:id': fromJosnDetailFile('ProductInfo')
}


module.exports = proxy