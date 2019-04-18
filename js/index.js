$(function(){
	$(".head-r li").hover(function(){
		$(this).find("#xiala").stop().slideDown(700,'elasticOut')
		
	},function(){
		$(this).find("#xiala").stop().slideUp()
	})
})

// 轮播
var num=0
$(".middle span").eq(0).addClass("blue")
// 左点击
$(".prev").click(function(){
	num--;
	if(num<0){
		num=($(".banner_one").length-1)
	}
	$(".banner_one").eq(num).show().siblings(".banner_one").hide()
	$(".middle span").eq(num).addClass("blue").siblings().removeClass("blue")
})
// 右点击
$(".next").click(function(){
	num++;
	if(num>$(".banner_one").length-1){
		num=0
	}
	$(".banner_one").eq(num).show().siblings(".banner_one").hide()
	$(".middle span").eq(num).addClass("blue").siblings().removeClass("blue")
})
// 小圆点
$(".middle span").click(function(){
	num=$(this).index()
	$(this).addClass("blue").siblings().removeClass("blue")
	$(".banner_one").eq(num).show().siblings(".banner_one").hide()
})


// 主要产品
function anim(ele,className){
	// 清除所有动画
	ele.eq(index).removeClass('animated fadeInLeft fadeInRight')
	.addClass('animated')
	.addClass(className)
}
var oi=$(".now_linebtn_one")
var oprev=$(".prev1")
var onext=$(".next1")
var oimg=$(".left_content")
var otext=$(".right_content")
var index=0
oprev.click(function(){
	index--;
	if(index<0){
		index=$(".content_one").length-1
	}
	oi.children('i').css('display','none');
	oi.eq(index).children('i').css('display','block');
	oi.children('span').css('display','block');
	oi.eq(index).children('span').css('display','none');
	anim(oimg,'fadeInLeft');
	anim(otext,'fadeInLeft')
	$(".content_one").hide().eq(index).show()
})
onext.click(function(){
	index++;
	if(index>$(".content_one").length-1){
		index=0
	}
	oi.children('i').css('display','none');
	oi.eq(index).children('i').css('display','block');
	oi.children('span').css('display','block');
	oi.eq(index).children('span').css('display','none');
	anim(oimg,'fadeInRight');
	anim(otext,'fadeInRight')
	$(".content_one").hide().eq(index).show()
})
oi.click(function(){
	var filter=''
	if (index>$(this).index()) {
		filter='fadeInRight'
	} else{
		filter='fadeInLeft'
	}
	index=$(this).index()
	oi.children('i').css('display','none');
	$(this).children('i').css('display','block');
	oi.children('span').css('display','block');
	$(this).children('span').css('display','none');
	anim(oimg,filter);
	anim(otext,filter)
	$(".content_one").hide().eq(index).show()
})

// 业务范围
var bur=true
$(".centerimg").click(function(){
	if (bur) {
		$(".shousuo_icon").removeClass("zhankai")
		$(this).siblings(".shousuo_icon").addClass("zhankai")
		$(this).parent(".yewucontent_simple").siblings().stop().slideDown()
		$(this).parent(".yewucontent_simple").parent(".yewucontent").siblings().children(".yewucontent_ditail").stop().slideUp()
		// bur=false
	} else{
		$(this).siblings(".shousuo_icon").removeClass("zhankai")
		$(this).siblings(".shousuo_icon").addClass("shousuo_icon")
		$(this).parent(".yewucontent_simple").siblings().stop().slideUp()
		// bur=true
	}
	bur=!bur
})
$(".shousuo_icon").click(function(){
	if (bur) {
		$(".shousuo_icon").removeClass("zhankai")
		$(this).addClass("zhankai")
		$(this).parent(".yewucontent_simple").siblings().stop().slideDown()
		$(this).parent(".yewucontent_simple").parent(".yewucontent").siblings().children(".yewucontent_ditail").stop().slideUp()
		bur=false
	} else{
		$(this).removeClass("zhankai")
		$(this).parent(".yewucontent_simple").siblings().stop().slideUp()
		bur=true
	}
	// bur=!bur
})


// 团队介绍
$(function(){
	var timer=null
	var nexttimer=null
	var prevtimer=null
	var temp=0
	// 自动
	function automove(){
		clearInterval(timer)
		timer=setInterval(function(){
			temp++;
			if(temp>$(".teamcontent_wrap .middle span").length-1){
				temp=0
			}
			$(".team_move").animate({left:-1000},1000,'backIn',function(){
				$(".team_move").find(".twoteam_wrap:first").appendTo(".team_move")
				$(".team_move").animate({left:0},0)
			}),
			$(".teamcontent_wrap .middle").find("span").removeClass("now").eq(temp).addClass("now")
		},5000)
	}
	automove()
	//左点击 
	$(".prev2").click(function(){
		clearTimeout(prevtimer)
		prevtimer=setTimeout(function(){
			temp--;
			if(temp<0){
				temp=$(".teamcontent_wrap .middle span").length-1
			}
			$(".team_move").find(".twoteam_wrap:last").prependTo(".team_move")
			$(".team_move").animate({left:-1100},0),
			$(".team_move").animate({left:0},1000,'backOut')
			$(".teamcontent_wrap .middle").find("span").removeClass("now").eq(temp).addClass("now")
		},200)
		
	})
	// 右点击
	$(".next2").click(function(){
		clearTimeout(nexttimer)
		nexttimer=setTimeout(function(){
			temp++;
			if(temp>$(".teamcontent_wrap .middle span").length-1){
				temp=0
			}
			$(".team_move").animate({left:-1000},1000,'backIn',function(){
				$(".team_move").find(".twoteam_wrap:first").appendTo(".team_move")
				$(".team_move").animate({left:0},0)
			})
			$(".teamcontent_wrap .middle").find("span").removeClass("now").eq(temp).addClass("now")
		},200)
	})
})



// 底部
$(function(){
	$('.music span').click(function(){
		var index=$(this).index()
		$('audio')[index].play()
		$(this).children('audio').play()
	})
})
