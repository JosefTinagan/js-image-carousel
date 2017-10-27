$(function() {
  var $carouselContainer = $('.carousel');
  var $images = $('.image', $carouselContainer);
  var $circles = "";
  var imageWidth = $images.first().width();
  var initialMargin = 0;
  var currentMargin = 0;
  var imageCount = $images.length;
  var maxMargin = imageWidth * (imageCount - 1);
  var circleCount = $circles.length;
  var $margins = [];

 createNavCircles();
 createListOfMargins();
 setNavigationCircle();
 advanceSlide();
 
   function advanceSlide(){
     next();
     var loop = setTimeout(advanceSlide, 5000);
     
     $('#stop').on('click',stopSlideShow);
     
     function stopSlideShow(){
       clearTimeout(loop);
     }
   }
 
   function prev() {
    var slideMargin = '+=' + imageWidth + 'px';
    
    if (currentMargin === initialMargin) {
      slideMargin = '-' + maxMargin + 'px';
    }

    slide(slideMargin);
  }

  function next() {
    var slideMargin = '-=' + imageWidth + 'px';
    
    if (currentMargin === -maxMargin) {
      slideMargin = initialMargin + 'px';
    }
    
    slide(slideMargin);
   }
  
    function jumpTo(event){
     var temp = "";
     $.each($circles, function(index,value){
       if(event.target.id == value.id){
         temp = index;
       }
    });
    var margin = $margins[temp] + "px";
    slide(margin);

    }
 
  function slide(pos) {
    $carouselContainer.animate({
      'margin-left': pos
    }, slideCallback);
  }
  
  function slideCallback(){
    setCurrentMargin();
    clearNavigationCircles();
    setNavigationCircle();
   
  }

  function setCurrentMargin() {
    currentMargin = parseInt($carouselContainer.css('margin-left'));
    console.log(currentMargin);
  }



  function createListOfMargins(){
    $margins = [];
    var temp = initialMargin;
    for(var i = 0; i < imageCount; i++){
      $margins.push(temp);
      temp += imageWidth;
    }
    //add negatives to the margins
    $margins = $.map( $margins, function(val , i){
      if(val == 0){
        return val; 
      } else {
        return (val * -1);
      }
    });
    console.log($margins);
  }
   

	//Navigation Circles Functions

   function createNavCircles(){
    for(var i = 1; i <= imageCount;i++){
      $('#dots').append('<div id="circle'+i+'" class="circle"></div>');
    }
     $circles = $('#dots .circle');
   }

  function setNavigationCircle(){
    console.log("set navigation circle function");
    var temp = "";
    $.each($margins,function(index,value){
      if(currentMargin === value){
        temp = index;
      }
    });
    var active = $circles[temp].id;
    setCircleBackground($('#'+active));
  }
  
  function clearNavigationCircles(){
    $.each($circles, function(index,value){
      $div = $('#'+value.id);
      removeCircleBackground($div);
    });
  }
  
  function setCircleBackground(param){
    $(param).addClass("circle-background"); 
  }
  
  function removeCircleBackground(param){
    $(param).removeClass("circle-background");
  }
  $('#next').hover(mouseIn,mouseOut);
  $('#prev').hover(mouseIn,mouseOut);
  $('#next').on('click', next);
  $('#prev').on('click', prev);
  $('#dots').on('click', jumpTo);
 // $('#do').on('click', checkNavigationCircle());
  
  function findCurrentNavigationCircleIndex(){
    console.log("Find Current Navigation Circle index");
    var current_index = "";
    for(var i = 0; i < $circles.length; i++){
      console.log($($circles[i]).hasClass("circle-background")); 
      if($($circles[i]).hasClass("circle-background")){
        return i;
      }
    }
  }
  
  function findImage(flag,index){
    if(flag == 'next'){
      var temp = index + 1;
      if(temp > $images.length - 1){
        var temp = 0;
      }
    } else if(flag == 'prev'){
      var temp = index - 1;
      if(temp < 0){
        var temp = 4;
      }
    }
    return $images[temp];
  }
 
  
  function mouseIn(event){
    var navigation_circle_index = findCurrentNavigationCircleIndex();
    if(event.target.id == 'next'){
      var temp = findImage('next',navigation_circle_index);
    } else if(event.target.id == 'prev'){
      var temp = findImage('prev',navigation_circle_index);
    }
    console.log(temp);
    $(this).addClass('next-prev-hover');
    $(this).css({'background-image':'url(\''+temp.src+'\')'})
  }
  
  function mouseOut(event){
    $(this).removeClass('next-prev-hover');
    $(this).css({'background-image':''});
  }
  
  function doSomething(){
    console.log($images);
    for(var i = 0; i <= $images.length - 1; i++){
      console.log($images[i]);
      var test = $images[i].src;
    }
     console.log(test);
     var x = $('<img src='+test+' />');
     console.log(x);
     console.log(x.src);
     $('#next').append($('<img src='+test+' />'));
   
  }
  
 
  
});