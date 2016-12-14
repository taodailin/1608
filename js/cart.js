/********************************javascript购物车********************/

/****清空购物车****/

function myfunction() {

	console.log($('.add'));
		$('#foot').on('click','#deleteAll', function(){
	
	
	var conf = confirm('亲,你忍心吗?');
	if(conf == true) {
		$.cookie('good', '', {
			path: '/'
		});
		window.location.href = "null-cart.html";
	}
	})
	
	
/**************添加***********/
	

	$('.add').click(function() {
		
	var $inputValue = $('tr').has($(this)).find('.count-input').val();
	  
	  $inputValue = parseFloat($inputValue) +1;
	  $('tr').has($(this)).find('.count-input').val($inputValue);			//找到特定的指定元素,排除避免干扰
	  
	 
	  /*************小计***********/
	 var $str = $('tr').has($(this)).find('.price').text();
	  
	  var $sum1 =  parseInt($str)*parseInt($inputValue);
	  $('tr').has($(this)).find('.subtotal').text($sum1);
	  
	  var $sum = 0;
	  var $num = $('.subtotal');    //  小计的节点
	  $.each($num,function(){		//遍历小计的节点
	  	$sum += parseInt($(this).text());
	  	
	  })
	  
	  
	  
	  $('#priceTotal').html($sum);
	  
	  
	  
	  /**********已选商品的数量***************/
	 
	 var $number2 = 0;
	 
	  
//	 var $count = $('tr').has($(this)).find('.count-input').val();
	 
	 var $countNode = $('.count-input');
	 $.each($countNode, function(){
	 	$number2 += parseInt($(this).val());
	 })
	 
	 $('#selectedTotal').text($number2); 
		
	})
	
	
	
	/****************************删除************************/
	
	$('.reduce').click(function(){
		
		
		var $inputValue = $('tr').has($(this)).find('.count-input').val();
		
		if($inputValue <= 1)
		{
			$inputValue = 1;
			return;
		}
		else{
			
			
		$inputValue = parseFloat($inputValue) -1;
	 	 $('tr').has($(this)).find('.count-input').val($inputValue);
	 	 
	 	 
	 	 	  /*************小计***********/
	 var $str = $('tr').has($(this)).find('.price').text();
	  
	  var $sum1 =  parseInt($str)*parseInt($inputValue);
	  $('tr').has($(this)).find('.subtotal').text($sum1);
	  
	  
	  
	  	  var $sum = 0;
	  var $num = $('.subtotal');    //  小计的节点
	  $.each($num,function(){		//遍历小计的节点
	  	$sum += parseInt($(this).text());
	  	
	  })
	  
	  
	  
	  $('#priceTotal').html($sum);
	 
	 	 var $number2 = 0;
	 
	  
//	 var $count = $('tr').has($(this)).find('.count-input').val();
	 
	 var $countNode = $('.count-input');
	 $.each($countNode, function(){
	 	$number2 += parseInt($(this).val());
	 })
	 
	 $('#selectedTotal').text($number2); 
	 	 
		}
	})

}