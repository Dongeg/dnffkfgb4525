$(function(){
	//body
    var w= document.documentElement.clientWidth|| document.body.clientWidth;
    var h= document.documentElement.clientHeight|| document.body.clientHeight;
    $("body").css('width',w+'px');
    $("body").css('height',h+'px');
    //header
    $(".input-search").bind('focus',function(){
    	$(".search").css('background-color',"#fff");
    	$(".input-search").css('background-color',"#fff");
    	$(".search").css('border','1px solid rgb(250,125,60)');
    	$(".search-content").css('display','block');
    });
	$(".input-search").bind('blur',function(){
    	$(".search").css('background-color',"rgb(242,242,245)");
    	$(".input-search").css('background-color',"rgb(242,242,245)");
    	$(".search").css('border','1px solid #aaa');
    	$(".search-content").hide();
	})
	$(".email").bind('mouseover',function(){
		$(".email-content").show();
	});
	$(".email").bind('mouseout',function(){
		$(".email-content").hide()
	})
	$(".hander-right-seting").bind('mouseover',function(){
		$(".hander-right-seting-content").show();
	});
	$(".hander-right-seting").bind('mouseout',function(){
		$(".hander-right-seting-content").hide()
	})
	//封面
	//main-left
	$(".wechat-sm-pic").bind('mouseover',function(){
		$('.wechat-lg-pic').css('opacity','1');
		$('.wechat-lg-pic').css('transform','scale(1)');
	})
	$(".wechat-sm-pic").bind('mouseout',function(){
		$('.wechat-lg-pic').css('opacity','0');
		$('.wechat-lg-pic').css('transform','scale(0.01)');
	})
	$(".qq-sm-pic").bind('mouseover',function(){
		$('.qq-lg-pic').css('opacity','1');
		$('.qq-lg-pic').css('transform','scale(1)');
	})
	$(".qq-sm-pic").bind('mouseout',function(){
		$('.qq-lg-pic').css('opacity','0');
		$('.qq-lg-pic').css('transform','scale(0.01)');
	})
	//backtop
	$(".back-top").click(function(){

	    $("html,body").animate({scrollTop:0},300);

    });
    $(window).bind('scroll',function(){
    	if($(window).scrollTop()>=1){
    		$(".nav").css('background-color','rgba(255,255,255,0.9)');
    		$(".back-top").show();
    	}
    	else{
    		$(".nav").css('background-color','rgba(255,255,255,1)');
    		$(".back-top").hide();
    	}
    })
});