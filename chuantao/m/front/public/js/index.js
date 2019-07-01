$(function() {

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false, //是否显示滚动条
    });

    mui('.mui-slider').slider({
        interval: 5000
    });

    $('#searchHref').on('tap', function(e) {
        e.preventDefault();
        location.href = 'search';
        // var webview = mui.openWindow({
        //     url: 'search',
        //     extras: {
        //         name: 'mui' //扩展参数
        //     }
        // });
        // console.log(webview.name); //输出mui字符串
    })
})