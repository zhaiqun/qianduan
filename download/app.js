var webPage = require('webpage');	//	创建一个 webpage 模块的实例
var page = webPage.create();
var taobaoURL = 'https://space.bilibili.com/44272436/channel/detail?cid=57180';	//	淘宝某一商品的链接
page.viewportSize = { width: 1440, height: 1080 };
page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36";
//	page.settings.loadImages = false;	//	禁止加载图片
//	page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) PhantomJS/19.0";
page.open(taobaoURL, function(status) 
{
	if(status !== 'success') 
	{
        console.log("open fail!");
    }else
    {

        console.log('URL: ' + page.url);
	    //	由于是拉取异步数据，我们打开页面后，等待若干秒后再去操作 dom （这里设置成 3 秒），获取累计评论
	    setTimeout(function() 
	    {
	        var result = page.evaluate(function()
	        {
                return document.title;
	            // return document.querySelectorAll("li").innerHTML;
	        });
	        console.log(result);
        	//	生成当前页面截图
        	// page.render("taobao.png");
	        phantom.exit();
	    }, 3000);
    }
});