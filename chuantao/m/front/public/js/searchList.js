$(function() {
    // mui.plusReady(function() {
    //     //关闭等待框
    //     plus.nativeUI.closeWaiting();
    //     //显示当前页面
    //     mui.currentWebview.show();
    // });

    mui.init({
        pullRefresh: {
            container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down: {
                style: 'circle', //必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
                color: '#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
                height: '50px', //可选,默认50px.下拉刷新控件的高度,
                range: '100px', //可选 默认100px,控件可下拉拖拽的范围
                offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
                auto: true, //可选,默认false.首次加载自动上拉刷新一次
                callback: {} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
    $('.orderUl  li').on('tap', function() {
        $span = $(this).find('span');
        if ($(this).siblings().find('span').hasClass('mui-icon-arrowup')) {


            $('.orderUl  li.now').find('span').removeClass('mui-icon-arrowup')
            $('.orderUl  li.now').find('span').addClass('mui-icon-arrowdown')


        }

        $(this).addClass('now').siblings().removeClass('now');
        if ($span.hasClass('mui-icon-arrowdown')) {

            $span.removeClass('mui-icon-arrowdown')

            $span.addClass('mui-icon-arrowup')
        } else {

            $span.removeClass('mui-icon-arrowup')
            $span.addClass('mui-icon-arrowdown')
        }


    })

})