 $(function(){
 	console.log("Sanity Check");
 
		var ply1 = 0;
		var ply2 = 0;
		
		$(window).on("keypress", function handler(event) {
			
			

			 if (event.which === 97) {
				if (ply1 < 9) {
					$(".box0").eq(ply1).text("");
			    	ply1 ++;
			    	$(".box0").eq(ply1).attr(".i");
			    } else if (ply1 <= 9) {
					console.log("Im here");
					//location.reload();
				$( "h3" ).html( "X is the Winner, Play Again!" );
				$(".box1").text("");

				}
				
			} else if (event.which === 39) {
				if (ply2 < 9) {
					$(".box1").eq(ply2).text("");
		 	    ply2 ++;
		 	    $(".box1").eq(ply2).text("O");
				} else if (ply2 <= 9){
					console.log("Im here");
				//location.reload();
				$( "h3" ).html( "O is the Winner, Play Again" );
				$(".box0").text("");
				}
			}
			
			if (ply1 === ply2){
			console.log("We are both here!");
			//location.reload();
			$( "h3" ).html( "It's a Tie, Play again!" );
				
			}
				
		$('.box0 img').attr("src");	
		

		});$("button").click(function handleClick(event){
		location.reload();
});
		
	});
			


 // $("button").click(function handleClick(event){
	// $("div.box").text("");

//$('.start').click(function(e) {
//     $('.start').text("x");
//});
//puts x on first box
 
