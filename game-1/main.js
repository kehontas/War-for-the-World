 $(function(){
 	console.log("Sanity Check");
 
	if (keypress === 97) {
		var ply1 = 0;
		 $(".box0").keypress(function() {
		     //$('.box1.start').text("o");
		     $(".box0").eq(ply1).text("");
		     ply1 ++;
		     $(".box0").eq(ply1).text("x");
		});	
	} else if (keypress === 13) {
	 	var ply2 = 0;
	 	$(".box1").keypress(function() {
	 	// $(window).click(function() {
	 	     //$('.box1.start').text("o");
	 	     $(".box1").eq(ply2).text("");
	 	     ply2 ++;
	 	     $(".box1").eq(ply2).text("o");
	 	 });
	 
	}

}); 



//$('.start').click(function(e) {
//     $('.start').text("x");
//});
//puts x on first box
 
