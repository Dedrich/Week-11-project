$(document).ready(function(){
    $("#hide").click(function(){
       $(".dontTouch").addClass("dontTouchHide");
       $(".philBoii").addClass("philHide");
       $(".bg").removeClass("bgBlur");
    });
    
    $("#show").click(function(){
        $(".dontTouch").removeClass("dontTouchHide");
        $(".philBoii").removeClass("philHide");
        $(".bg").addClass("bgBlur");
    });
});