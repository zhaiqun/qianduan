$(function() {
    $('[data-toggle="tooltip"]').tooltip();


    bannerCarousel();
    banner();


})

var banner = function() {

    var getData = function getData(callback) {

        if (window.data) {
            callback && callback(data);
        }
        $.get('data.json', function(data) {
            window.data = data;
            callback && callback(data);
        })

    }

    var render = function() {

        getData(function(data) {
            var isM = $(window).width() < 768;
            // if () {
            //     isM = true;
            // }
            var html = template(('tpl-img'), { value: data, isM: isM });
            $('.carousel-inner').html(html);

            var html = template(('tpl-indicator'), { count: data.length });
            $('.carousel-indicators').html(html);

        })
    }

    $(window).on('resize', render).trigger('resize');

}


function bannerCarousel() {

    var ismove = false;
    var bannerWidth = $('.carousel-inner');
    var startx = 0;
    var distance = 0
    $('.carousel-inner').on('touchstart', function(e) {

            startx = e.originalEvent.touches[0].clientX;


        }).on('touchmove', function(e) {

            var endx = e.originalEvent.touches[0].clientX;


            distance = endx - startx;

            ismove = true;


        }).on('touchend', function(e) {
            // }).on('touchend', function(e) {

            console.log(1);

            if (ismove && distance > 0) {
                $('.carousel').carousel('prev');
            } else if (ismove && distance < 0) {

                $('.carousel').carousel('next');
            }


        })
        // var isMove = false;
        // var bannerWidth = $('.carousel-inner');
        // var startX = 0;
        // var distanceX = 0
        // $('.carousel-inner').on('touchstart', function(e) {
        //     startX = e.originalEvent.touches[0].clientX;
        // }).on('touchmove', function(e) {
        //     var moveX = e.originalEvent.touches[0].clientX;
        //     distanceX = moveX - startX;
        //     isMove = true;
        // }).on('touchend', function(e) {
        //     /*距离足够 50px 一定要滑动过*/
        //     if (isMove && Math.abs(distanceX) > 50) {
        //         /*手势*/
        //         /*左滑手势*/
        //         if (distanceX < 0) {
        //             //console.log('next');
        //             $('.carousel').carousel('next');
        //         }
        //         /*右滑手势*/
        //         else {
        //             //console.log('prev');
        //             $('.carousel').carousel('prev');
        //         }
        //     }
        //     startX = 0;
        //     distanceX = 0;
        //     isMove = false;
        // });
}