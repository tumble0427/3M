//展開狀態
$(".popopn, .popttl").click(function(){
	status_open();
});	
	
//收合狀態
$(".popcps").click(function(){
	status_close();
});
	
//純關閉
$(".popcls").click(function(){
	if($("#popoff").attr('checked')){
		status_off();
	}else{
		$(".popbox").hide();
	}
});
	

//展開狀態
function status_open(){
	$(".popbox").show();
	$(".popbox").removeClass("cps");
	$(".popopn").hide();
	$(".popcps").show();
	document.cookie="popbox=on";
}
//收合狀態
function status_close(){
	$(".popbox").show();
	$(".popbox").addClass("cps");
	$(".popcps").hide();
	$(".popopn").show();
	document.cookie="popbox=close";
}
	
//關閉狀態
function status_off(){
	$(".popbox").hide();
	document.cookie="popbox=off";
}




//查看cookies
var cookies = document.cookie.split(";");
var findPop = false;
for (var i = 0; i < cookies.length; i++) {
	var cookie = cookies[i];
	var eqPos = cookie.indexOf("=");
	if (eqPos > -1) {
		var name = cookie.substr(0, eqPos);
		var value = cookie.substr(eqPos + 1);
		if (name == 'popbox' || name == ' popbox') {
			findPop = true;
			if (value == 'on') {
				//alert("是ON!");
				status_open();
			} else if (value == 'close') {
				//alert("是Close!");
				status_close();
			} else if (value == 'off') {
				//alert("是Off!");
				 status_off();
			} else {
				//alert("沒有value的例外!");
			}
		}
		//console.log(name + ': ' + value);
	} else {
		var name = cookie;
		//alert("找不到cookie value");
	}
}
if (!findPop) {
	status_open();
	//alert("找不到popbox")
};
	

	
