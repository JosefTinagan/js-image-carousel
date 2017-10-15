$(document).ready(function(){


	$('#right-arrow').click(function(){
		var current_margin = parseInt($('#images').css('margin-left'));
		console.log(current_margin);

		if(current_margin == -2000){
		  console.log("last Slide");
		  $('#images').animate({
		    'margin-left': '0px'
		  });
		} else {
		  $('#images').animate({
		    'margin-left': '-=500px'
		  });

		}

	});

	$('#left-arrow').click(function(){
		var current_margin = parseInt($('#images').css('margin-left'));
		console.log(current_margin);

		if(current_margin == 0){
		  console.log("last Slide");
		  $('#images').animate({
		    'margin-left': '-2000px'
		  });
		} else {
		  $('#images').animate({
		    'margin-left': '+=500px'
		  });

		}


	});
	  
	
	
});
