
//register.js



$(function(){
	
	var pattern = /^[1-3]\d{10}$/;
	var pattern2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var pattern3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	
	$('button').click(function(){
		var sUser = $('#username').val();
		
		var sPsw = $('#password').val();
		var sPsw2 = $('#password2').val();
		console.log(sPsw2);
		console.log(pattern.test(sUser) , pattern2.test(sUser) , pattern3.test(sPsw))
		if(!((pattern.test(sUser) || pattern2.test(sUser)) && pattern3.test(sPsw)))
		{
			console.log("用户信息输入错误");
			return;
		}
//		else if(!(pattern2.test(sUser) && pattern3.test(sPsw)))
//		{
//			console.log("用户信息输入错误");
//		}
		else if(sPsw != sPsw2)
		{
			console.log("两次输入的密码不一致!")
			return;
		}
		else if(sUser =="" || sPsw =="" )
		{
			console.log("用户信息输入错误");
			return;
		}
		else{
			//保存一份新的用户
			var newUser = {"name":sUser,"pws":sPsw};
			
			//要得到cookie里面的用户信息
			//cookie返回的是字符串
			var sCookie = $.cookie('user');
			
			//对字符串进行判断
			if(sCookie == undefined || sCookie == "")
			{
				
				//没有用户信息也定义一个var aCookie 这时候aCookie 是一个空数组
				var aCookie = [];
				aCookie.push(newUser);
			}
			else{
				//cookie里面有用户信息也定义一个var aCookie 这时候把sCookie转换成对象
				//这时候aCookie是一个对象
				//有两种情况
				//1).新用户信息已经注册
				//2).用户信息没有被注册则把信息压进cookie里面
				var aCookie = JSON.parse(sCookie);
				
				var bReg = false;		//用户没有被注册
				
				$.each(aCookie, function(){
					
					if(this.name == sUser)
					{
						bReg = true;
					}
					
				})
				
				if(bReg){
					console.log('你输入的信息已经注册!');
					
				}else{
					aCookie.push(newUser);
				}
				
			}
			
		}
		
		//修改cookie  把aCookie转换成字符串保存起来
		$.cookie('user',JSON.stringify(aCookie),{expires:7, path:"/"});
		console.log($.cookie('user'));
		
		
//		$.idcode.setCode(); 
		var IsBy = $.idcode.validateCode();
	if(IsBy){
            console.log("验证码输入正确")
        }else {
            console.log("请重新输入验证码")
        }
//		return false;			//submit有默认提交行为,所以return false阻止默认提交

		window.location.href = '../html/login.html';
	})
})
