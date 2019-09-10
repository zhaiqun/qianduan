const fs = require('fs')


function fromJsonFile(fileName) {
    return (req, res) => {
        const data = fs.readFileSync(`mocker/data/${fileName}.json`).toString()
        const json = JSON.parse(data)
        return res.json(json)

    }

}



function fromJsonDetailFile(fileName) {
    return (req, res) => {
        const data = fs.readFileSync(`mocker/data/${fileName}.json`).toString()
        const json = JSON.parse(date)

        let result = {}
        for (let index = 0; index < json.message.length; index++) {
            const element = json.message[index];

            if (element.id == req.params.id) {
                result = { "status": 0, "message": [element] }
                break;
            }

        }

        return res.json(json)

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
    // 'GET /api/getSwape': fromJsonFile('banner'),
    // 'GET /api/getProductList': fromJsonFile('GoodProductList'),
    // 'GET /api/getProductDetail/:id': fromJsonDetailFile('ProductInfo'),
    'GET /api/top250': fromJsonFile('top250')
}

module.exports = proxy