/**************************************************
We have 2 div's:
================
1] Myequation div:contains the text that will be called (jq code of the equation) it's hidden div.
                like: Math.cos(5) +  Math.sqrt(6) * Math.exp(8)
2] equation  div:contains the text that appear to the user.
                like: cos(5) + sqrt(6) *exp(8) {for the previos example}

We have 2 type of elements:
===========================
1] Simple element:
     when you click it the text of this element will be added to both 
     equation div and Myequation div like all digits and(+,-,/,*) these elements have no data-op 
     attribute

2] complex element:
    when you click it adds "Math.fun(" to the Myequation div
    and adds "fun(" (which means function) to the equation 
    the data-op attribute of this element is in the form of "Math.fun("
    like "Math.cos(" ,"Math.exp(" ,"Math.abs(" that will be added to Myequation text
    it also adds the function itself to equation which appear to the user
    like "cos(" ,"exp(","abs("   
****************************************************/
$(document).ready(function(){
    ///Make cursor pointer on the cell
    $("tr td").css("cursor","pointer");
    ///change color of the cell when hover
    $("tr td").hover(function(){
        $("tr td").css("background-color","#212529");
        $(this).css("background-color","#444");
    })

    ///when you click the cell add text to Myequation div and equation div
    $("tr td").on("click",function(){
         var funcname=$(this).text();
            switch(funcname)
            {
                case '2x':funcname="pow(2";jqfuncname="Math.pow(2";break;
                case 'xy':funcname="pow(";jqfuncname="Math.pow(";break;
                case 'sin':funcname="sin(";jqfuncname="Math.sin(";break;
                case 'cos':funcname="cos(";jqfuncname="Math.cos(";break;
                case 'tan':funcname="tan(";jqfuncname="Math.tan(";break;
                case '=':funcname="";jqfuncname="";break;
                case "PI":funcname="PI",jqfuncname="Math.PI";break;

                default:jqfuncname=funcname;break;
            }
            //Add the jquery function name to JQuery equation div text
           $(".JQequation").text($(".JQequation").text()+jqfuncname);
                   // Add function name to the equation text div
            $(".equation").text($(".equation").text()+funcname);
            });
    //when "=" button is clicked
    $(".execute").on("click",function()
    {
        //get the text from Myequation div
        var $result=($(".JQequation").text());
       //get the mathimatical value of $result
        var $Mathresult=eval($result);
        //display the result in result div
        $('.result').text(($Mathresult));
    });
    //when you click "C" button clear the equation and result and JQequation divs
    $(".clear").on("click",function(){
        $(".equation").text("");
        $(".JQequation").text("");
        $(".result").text("");
    })
})