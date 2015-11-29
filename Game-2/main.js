 $(function(){
 	console.log("Sanity Check");
 
		//var ply1 = 0;
		var ply2 = 0;
		var ply1 = 0;

var playerOne = new Image();
playerOne.src = "http://cdn.mysitemyway.com/icons-watermarks/simple-black/bfa/bfa_fighter-jet/bfa_fighter-jet_simple-black_128x128.png";

var playerTwo = new Image();
playerTwo.src = "http://cdn.mysitemyway.com/icons-watermarks/simple-black/bfa/bfa_fighter-jet/bfa_fighter-jet_simple-black_128x128.png";		
		$(window).on("keypress", function handler(event) {
			
			

			 if (event.which === 97) {
				if (ply1 < 9) {
					$(".box0").eq(ply1).text("");
			    	ply1 ++;
			    	$(".box0").eq(ply1).append(playerOne);
			    } else if (ply1 <= 9) {
					console.log("Im here");
					//location.reload();
					$( "h3" ).html( "Player 1 is the Winner, Play Again!" );
					$(".box1").text("");

				}
				
			} else if (event.which === 108) {
				if (ply2 < 9) {
					$(".box1").eq(ply2).text("");
		 	    	ply2 ++;
		 	    	$(".box1").eq(ply2).append(playerTwo);
				} else if (ply2 <= 9){
					console.log("Im here");
					//location.reload();
					$( "h3" ).html( "Player 2 is the Winner, Play Again!" );
					$(".box0").text("");
				}
			}
			
			if (ply1 === ply2){
			console.log("We are both here!");
			//location.reload();
				$( "h3" ).html( "It's a Tie, Play again!" );
				
			}
		
		

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
 
