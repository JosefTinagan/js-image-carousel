$(document).ready(function(){

	

	$('#right-arrow').click(function(){
		var current_margin = parseInt($('#images').css('margin-left'));
		var current_margin = current_margin * -1;

		if(current_margin == 2000){
		  console.log("last Slide");
		  $('#images').css('margin-left','0px');
		} else {
			var interval = 500;
			var margin = current_margin + interval;
			var margin = (margin * -1) + 'px';
			console.log("add: " + margin);

			$('#images').css('margin-left',margin);
		}

	});

	$('#left-arrow').click(function(){
		var current_margin = parseInt($('#images').css('margin-left'));

		if(current_margin  == 0){
		  console.log("first slide");
		  $('#images').css('margin-left','-2000px')
		} else {
			var current_margin = current_margin * -1;
			var interval = 500;
			var margin = current_margin - interval;
			var margin = (margin * -1) + 'px';
			console.log("add: " + margin);

			$('#images').css('margin-left',margin);
		}

	});
	  
	
	
});
