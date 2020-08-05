$(document).ready(function(){


	$("#all_btn").click(function(){
		$(".cont img").show(1000);
	})

	$("#web_btn").click(function(){
		$(".cont img").filter(".non_web").hide(2000);
		$(".web").show(2000);
	})

	$("#app_btn").click(function(){
		$(".cont img").filter(".non_appp").hide(1000);
		$(".appp").show(1000);
	})

	$("#icon_btn").click(function(){
		$(".cont img").filter(".non_iconn").hide(1000);
		$(".iconn").show(1000);
	})

})