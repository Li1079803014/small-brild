$(function(){
	var news=getUrlParams('news')
	var data=articleData[news].data
	console.log(data)
	$(".sup-tit").html(data.typeTitle)
	$(".sub-tit").html(data.typeEntitle)
	$(".p-tit").html(data.title)
	$(".date").html(data.updateAt)
	$(".author").html(data.updateByFullName)
	$(".big-img").attr("src",data.coverImg)
	$(".article-txt").html(data.content)
	function getUrlParams(name){  //news
		// 获取页面URL传过来的参数article.html?news=xiaoniaoNews1
		var reg=new RegExp('(^|&)'+name+'=([^|&]*)(&|$)')
		var r=window.location.search.substr(1).match(reg)
		//  news=xiaoniaoNews1  ''  xiaoniaoNews1  ''
		if (r!=null) {
			console.log(r)
			return r[2]
		} else{
			return ''
		}
	}
	
	
	// 喜欢
	var likearr=["再点一下试试~","爱死你了，MUA~","皇上万岁，万万岁","娘娘威武"]
	var olike=false
	$(".like").removeClass("LIKE")
	$(".like").click(function(){
		if (!olike) {
			olike=true
			$(".like-tips").text(likearr[Math.floor(Math.random()*likearr.length)])
			move()
		}else if(ifLikebtnClicked &&$(".like_tips").text()=="娘娘威武" ){ 
			$(".like_tips").text("哈哈哈");
			move();
		}
		$(this).addClass("LIKE")
		function move(){
			$(".like-tips").animate({"top":"0","opacity":"1"},600,"elasticOut",function(){
				$(".like-tips").delay(600).animate({"left":"-500px",opacity:"0"},600,"backIn",function(){
					$(".like_tips").animate({"top":"379","left":"258px",opacity:"0"},0);
					$(".like_btn").addClass("like_btn_clicked");
				})
			})
		}
	})
})