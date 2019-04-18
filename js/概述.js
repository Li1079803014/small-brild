var globle=globle||{}
$(function(){
	// 导航
	$(".nav_piece").click(function(){
		// var temp=$(".nav_piece").length
		$(this).addClass("now").siblings().removeClass("now")
		// $(".box").animate({top:temp*-100+"%"})
	})
	
	// 动画
	domove()
	function domove(){
		globle.timer=setTimeout(function(){
			$(".welcome_content").animate({"top":"40%"},600)
			$(".welcome_content .animate").each(function(index, element) {
				var $this = $(this);
				setTimeout(function(){
					$this.show().addClass("animated  fadeInUp");
				},200*(index+1))
            });
			setTimeout(function(){
				$(".shaxin").slideUp(600,function(){
					globle.over=true;
				})
			},2500)
		},4000)
	}
	var Bclick = false;
	$(".welcome_content").click(function(){
		if(Bclick){
			$(".shaxin").slideUp(600,function(){
				globle.over = true;
			});
		}else{
			Bclick = true;
		}
		
	})
	
	// 轮播
	var num=0
	$(".gaishu_goright").click(function(){
		num++
		if (num>=$(".gaishu_block").length) {
			$(".gaishu_goright").css({"opacity":"0.8"}),
			num=$(".gaishu_block").length-1
		}else{
			$(".gaishu_goright").css({"opacity":"1"})
		}
		$(".gaishu_slider").animate({left:-1000*num},500)
	})
	$(".gaishu_goleft").click(function(){
		num--
		if (num<=0) {
			$(".gaishu_goleft").css({"opacity":"0.8"}),
			num=0
		}else{
			$(".gaishu_goleft").css({"opacity":"1"})
		}
		$(".gaishu_slider").animate({left:-1000*num},500)
	})
	
	
	// text轮播
	$(".model_four ul li").click(function () {
	
        $(".model_four ul li").removeClass("active");
        $(this).addClass("active");
    });
	$(".model_four ul li").eq(0).click(function () {
        $(".m_four_move").css({
            "left": 0
        })
    });
	$(".model_four ul li").eq(1).click(function () {
        $(".m_four_move").css({
            "left": "-920px"
        })
    });
})