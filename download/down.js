var page = require('webpage').create(),
    system = require('system');
var spawn = require("child_process").spawn

// if (system.args.length === 1) {
//     console.log('Usage: netsniff.js <some URL>');
//     phantom.exit(1);
// } else {
//     var urls = [];
//     page.address = system.args[1];
//     page.onResourceReceived = function (res) {
//         if (res.stage === 'start') {
//             urls.push(res.url);
//         }
//     };



page.viewportSize = { width: 1440, height: 1080 };
page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36";
  var  url="https://item.taobao.com/item.htm?id=545533644459";

    page.open(url, function (status) {
        var har;

      
        if (status !== 'success') {
            console.log('FAIL to load the address');
            phantom.exit(1);
        } else {
            console.log('down resource ' + url+ ' urls.');
            var child = spawn("node", ["--harmony", "downHtml.js", urls.join(',')])
            child.stdout.on("data", function (data) {
              console.log(data);
            })
            child.stderr.on("data", function (data) {
              console.log(data);
            })
            child.on("exit", function (code) {
              phantom.exit();
            })            
        }
    });
// }