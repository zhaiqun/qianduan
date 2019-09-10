$(function(){
    $("#registerForm").on("submit",function(e){
        e.preventDefault();
        var  postData=$(this).serialize();
        $.ajax({
            url:'register',
            type:"post",
            data:postData,
            dataType:"json",
            
            success:function(data){
                if (data.code==1) {
                    window.location="/";
                }else{

                    $("#errorRegister").text(data.msg);
                }

            }



        })



    })



})