 $(function(){
 	console.log("Sanity Check");
 
		var ply1 = 0;
		var ply2 = 0;
		
		$(window).on("keypress", function handler(event) {
			if (event.which === 97) {
				if (ply1 < 7) {
					$(".box0").eq(ply1).text("");
			    	ply1 ++;
			    	$(".box0").eq(ply1).text("X");
				} else if (ply1 === 7) {
					console.log("Im here");
				}
			} else if (event.which === 39) {
				if (ply2 < 7) {
					$(".box1").eq(ply2).text("");
		 	    ply2 ++;
		 	    $(".box1").eq(ply2).text("O");
				} else if (ply2 === 7){
				console.log("Im here");
				}	
			}
		});
		// if player one reaches box0 finsh
		// 	player one wins
		// console.log player one wins
		// else 
		// 	player two wins

	


}); 



//$('.start').click(function(e) {
//     $('.start').text("x");
//});
//puts x on first box
 
