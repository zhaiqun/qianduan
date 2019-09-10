$(function () {

    $("#login-form").on('submit', function (e) {
        $(".alert").addClass('hidden');
        e.preventDefault();
        var postdata = $(this).serialize();
        $.post("login",
            postdata,
            function (data) {
                console.log(data);
                if (data.code==1) {
                    window.location = "/";
                }
                // $(".alert").removeClass('hidden');
     
                // $(".alert").html(data.msg);

                $("#errorLogin").html(data.msg);

            })



    });




})