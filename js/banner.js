//banner.js

$(function(){
	
	var index = 0;
	
	show();
	
	function show(){
		if(index == $('.switchable-content').find('li').length){
			index = 0;
		}else if(index < 0){
			index = 9;
		}
//		$('#bigpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
		$('.switchable-content').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);

		$('.switchable-triggerBox').find('li').eq(index).addClass('active').siblings().removeClass('active');
	}
	//设置定时器
	var timer = setInterval(fAnimate,4000);
	function fAnimate(){
		index++;
		show();
	}
	//给小图增加点击事件
//	$('.switchable-triggerBox').find('li').click(function(){
//		index = $(this).index();
//		show();
//	})
	
	$('.switchable-triggerBox').find('li').mouseenter(function(){
		index = $(this).index();
		show();
	})
})
