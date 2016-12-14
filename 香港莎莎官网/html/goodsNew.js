//goodsNew.js

$(function() {
	//xx.json&index=1&page=1$size=56
	var sUrl = location.search.replace('?', '');
	var arr = sUrl.split("&");
	ajax(arr[0]);
	//	console.log(sUrl);
	function ajax(aa) {

		$.ajax({
			type: "get",
			url: "" + aa + "",
			async: true,
			error: function(res) {
				console.log(res);
			},
			success: function(res) {
				console.log(res.goods);
				update(res.goods[arr[1]]);

			}
		});
	}

	//更新数据
	function update(data) {
		//需要遍历data因为在json当中有多个文件
		//需要遍历data 因为在json文件当中有多个对象

		console.log(data);

		var str = '<img src="' + data.imgbig + '" alt="透明质酸洁面泡沫" index="' + data.index + '" class="small-pic" style="max-width:300px;max-height:300px;">';
		$('.album-preview-container').append($(str));
		var str1 = '<a href="#" target="_blank" class="numberA">' + data.des02 + '</a>';
		//				$('.product-titles').append($(str1));
		var str2 = '&nbsp;' + data.des03 + '(190克)';
		$('.product-titles').html(str1 + str2);
		var str3 = '<b class="price"><ins class="action-price" id="price_a" >' + data.price + '</ins></b>\
				 <span class="old-price"><del>市场价</del><del class="grey action-mktprice">' + data.dis + '</del></span>\
				 <i class="syew f16"><span class="action-saveprice">5.1折</span></i>';
		$('.detail').append(str3);

		$('.product-buy-action').on('click', '.goodscart', function(e) {

			var imgbig = $(e.target).closest('.page-maincontent').find('.small-pic').attr('src');
			var des03 = $(e.target).closest('.page-maincontent').find('.product-titles').find('a')[0].nextSibling.nodeValue;
			var price = $(e.target).closest('.page-maincontent').find('#price_a').text();
			var index = $(e.target).closest('.page-maincontent').find('.small-pic').attr('index')

			var numb = $('.action-quantity-input').val();

			var obj = {
				"index": index,
				"imgbig": imgbig,
				"price": price,
				"des03": des03

			}

			//strCookie 是存在cookie里面的产品信息
			var strCookie = $.cookie("good");

			//console.log(strCookie);

			var bGood = false; //代表没有此产品
			if(strCookie == undefined || strCookie == "") {
				var newData = [];

				var newGood = {
					"index": index,
					goods: obj,
					num: numb
				};

				newData.push(newGood);

				$.cookie("good", JSON.stringify(newData), {
					expires: 7,
					path: "/"
				});

			} else {
				var oCookie = JSON.parse(strCookie);
				//console.log(oCookie);

				$.each(oCookie, function() {

					if(this.index == index) {
						this.num = parseInt(this.num) + parseInt(numb);

						bGood = true;
					}
				})

				if(bGood == false) {

					var newGood = {
						"index": index,
						goods: obj,
						num: numb
					};
					oCookie.push(newGood);
				}

				$.cookie("good", JSON.stringify(oCookie), {
					expires: 7,
					path: "/"
				});
			console.log(oCookie)
			}
			
			return false;

		})

		$('.btn-increase').click(function() {

			var $inputValue = $('ul').has($(this)).find('.action-quantity-input').val();

			$inputValue++

			$('ul').has($(this)).find('.action-quantity-input').val($inputValue);
		})

		$('.btn-decrease').click(function() {

			var $inputValue = $('ul').has($(this)).find('.action-quantity-input').val();

			if($inputValue <= 1) {
				$inputValue = 1;
				return;
			} else {

				$inputValue--;
				$('ul').has($(this)).find('.action-quantity-input').val($inputValue);

			}

		})

	}

})