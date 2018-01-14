


$(function(){
	var temp = {
			"id" : 6,
			"username" : "wangxi",
			"photo" : "aa",
			"credits" : 100,
			"resourceCount" : 1000
		}
	var test = "aaaaa";
	$.cookie("test",test);
	console.log($.cookie("test"));
	
	/**
	 * 注意：json、数组 等格式的数据并不是简单的存入cookie中，需要经过一定的处理才可以。
	 * 下面是json格式的存、取
	 * 数组用到时 ： 百度
	 */
	
	
	//将json转为字符串，才可存入coookie中
	var str = JSON.stringify(temp);
	
	$.cookie("userInfo",str);
	
	// var cookieStr = $.cookie("userInfo");
	// console.log(cookieStr);

	//将字符串转换成json格式数据
	var userInfo = JSON.parse($.cookie("userInfo"))

	console.log(userInfo.username);
	// var value = JSON.parse(str);
	
	// console.log(value.id);
	// console.log(value.username);



})
