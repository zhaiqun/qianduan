$(function() {
    $('.btn-Search')[0].addEventListener('tap', function() {
        if ($.trim($('#input-Search').val().length) == 0) {
            console.log(1);
            mui.toast('请输入关键词', { duration: '1000', type: 'div' })
            return;
        }

        // location.href = '/searchList?key=' + $('#input-Search').val();
        var webview = mui.openWindow({
            url: 'searchList',
            extras: {
                key: $('#input-Search').val() //扩展参数
            }
        });
        console.log(webview.name); //输出mui字符串

    });


})