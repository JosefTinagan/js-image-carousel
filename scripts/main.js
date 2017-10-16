$(document).ready(function(){



	$('#right-arrow').click(function(){
		next();
		clearCircle();
		navigationCircle();
	});

	$('#left-arrow').click(function(){
		previous();
	});

	var navigationCircle = function(){
	  var current_margin = parseInt($('#images').css('margin-left'));
	  console.log("Navigation Circle Function");
	  console.log(current_margin);
	  switch(current_margin){
	    case 0:
	   	  $('#first_circle').addClass("circle-background");
	    break;
	    case -500:
	      $('#second_circle').addClass('circle-background');
	    break;
	    case -1000:
	      $('#third_circle').addClass('circle-background');
	    break;
	    case -1500:
	      $('#fourth_circle').addClass('circle-bacground');
	    break;
	    case -2000:
	      $('fifth_circle').addClass('circle-background');
	    break;

	    default: break;
	  }
	};

	var clearCircle = function(){
	  var temp_arr = ['first_circle','second_circle','third_circle','fourth_circle','fifth_circle'];
	  for(var i = 0; i < temp_arr.length; i++){
	    $('#'+temp_arr[i]).removeClass("circle-background");
	  }
	}

	var next = function(){
	  var current_margin = parseInt($('#images').css('margin-left'));
	  console.log("next function");
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

	   var test = parseInt($('#images').css('margin-left'));
	   console.log("new value of left" +test);


	}

	var previous = function(){
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
	}
	  
	
	navigationCircle();
	
});
