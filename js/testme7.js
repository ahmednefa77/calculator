$(function(){

    $("button").click(function(){
        var output=$(".email").val();
        if(output=="") {
            $(".email").addClass("error");
            $(".error-text").slideDown(1000);
        }
        else if(output.length<=4)
        {
            $(".email").addClass("error");
            $(".less-text").slideDown(1000);
        }
        //////////////////////////////////////////
        var output=$(".password").val();
        if(output=="") {
            $(".password").addClass("error");
            $(".emptypassword").slideDown(1000);
        }
        else if(output.length<=4)
        {
            $(".password").addClass("error");
            $(".lesspassword").slideDown(1000);
        }
        //////////////////////////////////////////
        $(".email").keypress(function(){
            $(".email").removeClass("error");
            $(".error-text").slideUp(100);
            $(".less-text").slideUp(100)
        })
        $(".password").keypress(function(){
            $(".password").removeClass("error");
            $(".emptypassword").slideUp(100);
            $(".lesspassword").slideUp(100)
        })
    })

})