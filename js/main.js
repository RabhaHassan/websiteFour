/*global $, jQuery, console, alert, prompt*/
$(document).ready(function () { 
   "use strict";
    // 1. Simple mode, it styles document scrollbar: 
        $("html").niceScroll({
        cursorcolor: " #d864e2",
        cursorwidth: "15px"
    });

        //navbar
    var winh = $(window).height(),
        upperH =$(".upper-bar").innerHeight(),
        navh =$(".navbar").innerHeight();
    $(".slider ,.carousel-item").height(winh -(upperH+navh));
    //shuffle
    $(".featured-work ul li").on('click',function(){
$(this).addClass("active").siblings().removeClass("active");
   if($(this).data('class')=== "all"){
       $(".featured-work .shuffle-imgs .col-md").css("opacity","1");
   }else{
       $(".featured-work .shuffle-imgs .col-md").css("opacity",".08");
       $($(this).data('class')).parent().css("opacity","1");
   }
    });
    //loading
    $(window).load(function () {
        $(".loading-overlay .loader").fadeOut(7000, function () {
            $(".loading-overlay").addClass("hidden_overlay");
        });
    });
        //shuffle
    $(".scientist ul li").on('click',function(){
$(this).addClass("active").siblings().removeClass("active");
   if($(this).data('class')=== "all"){
       $(".featured-work .shuffle-imgs .col-md").css("opacity","1");
   }else{
    $(".scientist .shuffle-imgs .col-md").css("opacity",".08");
       $($(this).data('class')).parent().css("opacity","1");
       var myID =$(this).attr("id");
       $(".content-images div").hide();
       $("#"+myID+"-content").fadeIn("1000");
   }
    });
        //scroll
    var scrollbottom = $(".scroll-top");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            scrollbottom.show();
        } else {
            scrollbottom.hide();
        }
    });
    
    $(".scroll-top").click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });
  }); 

