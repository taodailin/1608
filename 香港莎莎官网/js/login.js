//登录js校验

$(function(){
	
	var pattern = /^[1-3]\d{10}$/;
	var pattern2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var pattern3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	$('button').click(function(){
		var sName = $('#username').val();
		var sPsw = $('#password').val();
		console.log(sPsw);
		console.log(pattern.test(sName),pattern2.test(sName),pattern3.test(sPsw))
		if((pattern.test(sName) || pattern2.test(sName)) &&  pattern3.test(sPsw) && sName!="" && sPsw!="")
		{
			//校验成功获取里面的cookie返回的字符串
			var sCookie = $.cookie('user');
			
			//判断字符串是否为空
			
			if(sCookie == "" || sCookie == undefined){
				var obj = {type:false};
				console.log('用户未注册!');
				window.location.href = '../html/register.html';
			}else{
				//把cookie返回的字符串转换成对象进行遍历
				var aCookie = JSON.parse(sCookie);
				//aCookie是数组
				console.log(aCookie);
				
				//未登陆
				var bRig = true;
				
				$.each(aCookie,function(){
					//this是遍历到的对象
					if(this.name == sName && this.pws == sPsw){
						//登陆成功
						bRig = false;
	
					}
				})
				
				if(bRig){
					
					console.log('用户未注册!');
					var obj = {type: false};
				}else{
					//用户信息正确
					var obj = {type:true, name:sName};
				}
			}
			$.cookie('login',JSON.stringify(obj),{expires:7, path:"/"});
			console.log($.cookie('login'));
			console.log('登陆成功!');
		}else{
			console.log('输入错误');
		}
		window.location.href = '../index.html';
	})
	
})
