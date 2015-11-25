 $(function(){
 	console.log("Sanity Check");
 

//  $('.box0.start').click(function(e) {
//      // for each click add an x
//      //  	box0 ++
//       $('.box0.start').text("x");
// });

  //if (key press = keyCode: 97 value)
var ply1 = 0;
 $(window).click(function() {
     //$('.box1.start').text("o");
     $(".box0").eq(ply1).text("");
     ply1 ++;
     $(".box0").eq(ply1).text("x");
});

//else if (key press = 13; value)
var ply2 = 0;
 $(window).click(function() {
     //$('.box1.start').text("o");
     $(".box1").eq(ply2).text("");
     ply2 ++;
     $(".box1").eq(ply2).text("o");
});

});


//$('.start').click(function(e) {
//     $('.start').text("x");
//});
//puts x on first box
 
