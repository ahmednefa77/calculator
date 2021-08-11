
$(document).ready(function(){
    $("button").click(function(){
       var Myresult=eval($("input").val());
       
       $('.test').html(Myresult);
       
    })
});