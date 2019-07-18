$(document).ready(function() {

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            if (!$('.searchC  input,.search a:nth-of-type(1)').hasClass('scroll')) {
                $('.searchC  input,.search a:nth-of-type(1)').addClass('scroll')
                $('.searchC').css(' background-color', 'rgb(255,255,255,1)')
            }

        } else {
            $('.searchC  input').removeClass('scroll');
            $('.searchC  input,.search a:nth-of-type(1)').removeClass('scroll')
            $('.searchC').css(' background-color', 'rgb(240,240,240,0.5)')
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {

            delay: 1000, //1秒切换一次
        }, //可选选项，自动滑动
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },


    })

})